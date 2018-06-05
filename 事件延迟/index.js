$(document).ready(function () {

  var $statusKey = $('.status-key');
  var $statusAjax = $('.status-ajax');
  var intervalid;

  // Fake ajax request. Just for demo
  function make_ajax_request(e) {
    var that = this;
    $statusAjax.html('That\'s enough waiting. Making now the ajax request');

    intervalid = setTimeout(function () {
      $statusKey.html('Type here. I will detect when you stop typing');
      $statusAjax.html('');
      $(that).val(''); // empty field
    }, 2000);
  }

  // Event handlers to show information when events are being emitted
  $('.autocomplete')
    .on('keydown', function () {
      $statusKey.html('Waiting for more keystrokes... ');
      clearInterval(intervalid);
    })


  // Display when the ajax request will happen (after user stops typing)
  // Exagerated value of 1.2 seconds for demo purposes, but in a real example would be better from 50ms to 200ms
  $('.autocomplete').on('keydown',
    debounce(make_ajax_request, 1300));

  // debounce:自造轮子，或者使用插件库，
  // 作用是多次连续事件监听只执行最后一次，且事件发生时间不能太长，太长设置的延迟会失效
  // debounce的实现原理，就是利用设定延时函数，清除延时函数，在这其中的一个时间差实现多次事件触发一次的效果
  function debounce(fn, delay) {
    var timer;
    return function () {
      var context = this,
        args = arguments;

      clearTimeout(timer)

      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  }
  // 
});

// throttle的解释
/**
*
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  执行间隔，单位是毫秒（ms）
*
* @return {Function}     返回一个“节流”函数
*/

function throttle(fn, threshhold) {

  // 记录上次执行的时间
  var last

  // 定时器
  var timer

  // 默认间隔为 250ms
  threshhold || (threshhold = 250)

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments

    // 当前的时间毫秒数
    var now = +new Date()

    // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)

      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)

    // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}