// dpr device pixel ratio 设备像素比 
// console.log(window.devicePixelRatio,'设备dpr')
// // window.devicePixelRatio
// window.alert('1' + 23)
// window.alert('1' - 23)

//浏览器上右window属性，在控制台中灭有window属性，对浏览器的开发就会有this指向window 
// (function(){
//     console.log(window)
// })()
// console.log(this)

// function test(){
//     var a = 10;
//     return function(){
//         return a++;
//     }
// }
// var aa = test();
// console.log(aa())
// console.log(aa())

// var span = document.querySelector('span')
// alert(getComputedStyle(span)['line-height'])
// var a = 10;
// console.dir(Number)
// console.dir(Date())
// console.log(new Function)
// console.log(new Object)
// console.log(new String)
// console.dir(RegExp)
// (new Function()).call()
// new person();


// 原型链的解释
// var obj = {
//     name:'adfaiefiejf',
//     sex:'female'
// }
// function a1() {
//     this.job = '医生';
//     this.name = 'aaaaa';
//     this.sex = 'male';
//     test = 'asdf',

//     function say() {
//         console.log(this.name,'a1')
//     }
//     // say();
// }
// a1.prototype.name = 'aaaaaa'
// a1.prototype.sex = 'male'
// a1();

// function a2() {

//     // a1.call(a2)

//     this.name = 'a2'
//     function say() {
//         console.log(this.name,'a2')
//     }
//     say();
// }
// a2.prototype = Object.create(a1.prototype)
// a2.prototype.constructor = a2;
/*************************************************************************** */
// prototype.constructor仅仅可以用于识别对象是由哪个构造函数初始化的，仅此而已
/*************************************************************************** */

// Object.create()创建一个具有指定原型且可选择性地包含指定属性的对象(第二个参数).
// var a = Object.create(a1.prototype)
// console.log(a) 
// console.log(a.name)

// a2()
console.dir(document.querySelector('span'))