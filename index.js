// var a = []
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i)
//     }
// }
// a[5]()
// var foo = function () {

//     console.log('foo1');

// }

// foo();  // foo1

// var foo = function () {

//     console.log('foo2');

// }

// foo(); // foo2

// function foo() {

//     console.log('foo1');

// }

// foo();  // foo2

// function foo() {

//     console.log('foo2');

// }
// var a = 1;
// (function () {
//     var a = 2
//     console.log(a)
// })()
// foo(); // foo2
// for (var i = 0; i < 30; i++) {
//     i++
//     // i = 1
//     console.log(i);
// }
// (function(){

//     // a = 1
//     console.log(a)

//     var a = 1 

//     console.log(a)

// })()
// function bar(x = y, y = 2) {
//     return [x, y];
// }
// bar(); //	报错
// {
//     var i = 10
//     console.log(i)
// }
// console.log(i)
// function	f()	{	console.log('I	am	outside!');	}
// (function	()	{
// if	(false)	{
// //	重复声明一次函数f
// function	f()	{	console.log('I	am	inside!');	}
// }
// f();
// }());


// 异步理解
// console.log('one');

// (function(){
//     console.log('two')
//     setTimeout(() => {
//         let a = 5
//         console.log('three')
//     }, 5000);
//     console.log('forth')
//     for(let i = 0 ; i < 10000000000 ; i ++){

//     }
//     console.log('10000000000')
// })();
// for(let i = 0 ; i < 10000000000 ; i ++){

// }
// console.log('外部');
// (function(){
//     setTimeout(() => {
//         console.log('1')
//     }, 2000);
// })()


// var func = function a() {
//     console.log(typeof a , '1');
// }
// console.log(typeof a,'2');
// console.log( typeof(null) ,'null')        // Object
// console.log( typeof(undefined) ,'undefined')   //undefined
// console.log( typeof(NaN) ,'NaN')         //
// console.log( NaN == undefined  , 'NaN ==undefined')    //
// console.log( NaN == NaN , 'NaN == Nan')          //
// var str = "123abc";          //
// // console.log( typeof(str++) ,'Str++')       //
// console.log( typeof(str) ,'str')

// function abc(){
//     console.log('abc')
// }
// abc.abc();

// var obj = {
//     name:'aaa',
//     age:50,
//     run:function(){
//         console.log(this,'run的this')
//     },
//     walk:{
//         sleep:function(){
//             console.log(this,'sleep的this')
//         }
//     }
// }
// obj.run();
// obj.walk.sleep();
// var obj = { 
//     name:'wang',
//     age:59,
//     run:function () {  
//         console.log('run')
//     }
// }
// // 对象的遍历调用数组的iterator接口，进行伪数组调用。
// for(let i in obj){
//     console.log(obj[i])
// }

// function deepCopy(p,c){
//     var c = c || {};
//     for(var i in p){
//         if(typeof p[i] === 'object'){
//             c[i] = (p[i].constructor === Array) ? [] : {};
//             deepCopy(p[i],c[i]);
//         }else{
//             c[i] = p[i];
//         }
//     }
//     return c;
// }


// var obj = {
//     name:'bird',
//     skin:{
//         color:'red',
//         size:'big'
//     },
//     bark:function(){
//         console.log('bark')
//     }
// }

// var aaa = deepCopy(obj);
// console.log(aaa)
// function a(){
//     e=arguments.callee.caller.arguments[0] || window.event;
//     alert(e.keyCode);
//     } 
// document.onclick=function(event){  
//         alert(event.clientX);  
//         console.log(event)
// }  
// 第一版
// Function.prototype.applyOne = function (context) {
//     // 首先要获取调用call的函数，用this可以获取
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }

// //简单写一个不带参数的demo
// var jawil = {
//     name: "jawil",
//     sayHello: function (age) {
//         console.log(this.name);
//     }
// };

// var lulin = {
//     name: "lulin",
// };

// //看看结果：
// jawil.sayHello.applyOne(lulin) //lulin

// // 定义的全局变量
// // console.log(global.a)

// // function f1() {　　　　
// //     n = 999;
// //     a = 'a'
// // }
// // f1();
// // console.log(n, 'n'); // 999
// // console.log(global.a, 'a')
// // 闭包closure
// function f1() {　　　　
//     var n = 999;　　　　　　
//     function f2() {　　
//         n += 1　　　　
//         console.log(n);　　　　
//     }　　　　
//     return f2;　　
// }　　
// var result = f1();　　
// result(); // 999
// // 就像电路的闭环，在没有闭环的时候电路中没有电势差，但是一旦闭环完成，即函数内的返回值与外界发生了交互，便形成了闭环
// result(); // 1000
// function test(){
//     var age = 15;
//     function ttt(){
//         age +=10;
//         console.log(age)
//     }
//     return ttt;
// }
// var t1 = test();
// console.log(ttt)
// t1();
// t1();
// t1();
// var t2 = test();
// t2()

// foreach本质上还是一个同步for循环
// 跳出foreach语句不能够实现break，不支持这条语法，只能用for语句来实现break
// let arr = [1,2,3,4,5,6,11,7,9,1,9,1,1,15,14,54,84,8,48,4,458,48,48,,84,58,54,23]
// console.log('开始')
// // arr.forEach((item,index,arr)=>{
// //     console.log(item)
// //     if(item==48) {
// //         console.log('return')
// //         return  false;
// //     }
// // })
// for(let i = 0 ; i < arr.length; i ++){
//     console.log(arr[i])
//     if(arr[i]== 48){
//         break
//     }
// }
// console.log('结束')


// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     },
//     one:{
//         func:function(){
//             console.log("one func:  this.foo = " + this.foo);
//         }
//     }
// };
// myObject.func();
// myObject.one.func();
// ***************************************不是太明白********************************************
// var a={},
//     b={key:'b'},
//     c={key:'c'};
//     // 下面效果相同，设置对象属性时，JavaScript会隐式地将参数值串联起来。
//     // 在这种情况下，由于b和c都是对象，它们都将被转换为“[object Object]”。
//     // 因此，a [b]和a [c]都等价于[“[object Object]”]，并且可以互换使用。
//     // 因此，设置或引用[c]与设置或引用[b]完全相同。
//     // b={key:'b'},
//     // c={key:'c'};
    

// a[b]=123;
// a[c]=456;

// console.log(a[b]);
// **********************************************************************************
// console.log(new Date("2018-06-14T09:01:21.000+0000").format('YYYY-MM-DD hh:mm:ss'))
// // Date的格式化函数，便于格式化日期
// Date.prototype.format = function (format) {
//     if(isNaN(this.getMonth())){
//       return null;
//     }
//     let o = {
//       "M+": this.getMonth() + 1,
//       "D+": this.getDate(),
//       "h+": this.getHours(),
//       "m+": this.getMinutes(),
//       "s+": this.getSeconds(),
//       "q+": Math.floor((this.getMonth() + 3) / 3),
//       "S": this.getMilliseconds()
//     };
//     if (/(Y+)/.test(format)) {
//       format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     }
//     for (let k in o) {
//       if (new RegExp("(" + k + ")").test(format)) {
//         format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
//       }
//     }
//     return format;
//   };



// *****************关于this的测试********************
Function.prototype.method = function (name, func){
  this.prototype[name] = func;
  console.log(this,'Function内的this')
  return this;
}
Number.method('integer',function(){
  console.log(this,'number内的this')
  return Math[this < 0 ? 'ceil' : 'floor'](this);
})
console.log((-10/3).integer(),'预测结果为-3');