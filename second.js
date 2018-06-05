// ********************扩展运算符的使用*********************
// let [a,b,c] = [10,12]
// console.log(a,b,c)
// let[head,...bottom] = [1,2,3,4,5,6,7,8,9]
// console.log(bottom)

// *******************原型链的测试使用*********************
// function Person (name,age){
//     this.age = age
//     this.name = name
//     this.show = function(){
//         console.log(this)
//         console.log(this.age)
//         console.log(this.name)    
//     }
//     return this
// }
// function Man (sex,age){
//     this.age = age;
//     this.sex = sex;
//     console.log(this,'prototype')
// }
// Person.prototype.showP= function(){
//     console.log(this)
// }
// var p = new Person('lily',20).showP()
// // p.showP()
// var man = new Man('male',11)
// var public
// var obj = {
//     name:'张三',
//     age:21
// }


// ********************************对原型链的修改是否会改变其他属性的值*************************
// // 被private修饰的成员只能在本类中访问

// function data(){
//     return public = {
//         name:'hhaah',
//         job:'h5'
//     }
// }
// var b = obj 
// var a = data();
// var c = data() 
// // console.log(b)
// console.log(a,c)
// a.name='aaaa'
// b.name = 'bbb'
// console.log(a,b)
// b.age = 200;
// console.log(obj)

// **********************函数的执行顺序*********************
// var a = 120;
// console.log(120)
// function aaa(a) {  
//     let b =a 
//     console.log(b)
// }
// aaa(a);
// (function(){
//     console.log('匿名函数')
//     aaa()
//     for(let i = 0 ; i<1000; i++){

//     }
//     console.log('aaa之后')
// })()
// console.log('匿名函数结束之后')

// ********************************递归的使用***********************
// count = 0
// function add() {  
//     console.log(add.count)
//     ++add.count > 10 ? '' : add()
// }
// add()


// ******************return的函数时候执行，还是只是赋值返回函数地址***************************
// 结果证明返回的只是地址，不会执行。
// var a = 10 ;
// function foo(){
//     // (function(){
//     //     console.log(a,'匿名函数')
//     // })();
//     // console.log(a)
//     return function(){
//         console.log(a,'----')
//     }
// }
// var aaa = foo()
// aaa()
// // +取值为毫秒数
// var time = +new Date()
// console.log(time)


// *************************在原型对象上进行添加减少属性如果不是文件作用域交互，不会影响原型的属性***************
// 不论在哪个文件中进行修改原型，都不会更改源模型
// Function.prototype.abc = function(){
//     console.log('Function的原型对象')
// }
// function start(){
//     console.log('start')
// }
// start.abc()

// ******************在函数内部定义全局变量，不使用var、const等声明默认为全局变量*********
// function printThis() {
//     let print = () => console.log(this);

//     print();
//   }
//   printThis.call([1,2,3]);
//   printThis.call([2]);
// (function(){
//     console.log(this)
// })()
// function aaa(){
//     this.a = 'aaa'
// }
// aaa()
// console.log(a)

// *********arguments************
// function arg(){
//     console.log(arguments)
// }
// arg(10,20,30)
// var threeSum = function (nums) {
//     var result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (i == j || j == k) {
//                     continue;
//                 }
//                 if (nums[i] + nums[j] + nums[k] == 0) {
//                     var pu = sort(nums[i],nums[j],nums[k])
//                     if(!repeatSearch(result,pu)){
//                         result.push(pu)
//                     }
//                 }
//             }
//         }
//     }
//     return result;
// };

// ***************LeetCode的算法*****************
// function sort(a,b,c){
//     if(a>b){
//         if(b>c){
//             return [c,b,a]
//         }else{
//             if(a>c){
//                 return [b,c,a]
//             }else{
//                 return [b,a,c]
//             }
//         }
//     }else{
//         if(a>c){
//             return [c,a,b]
//         }else{
//             if(b>c){
//                 return [a,c,b]
//             }else{
//                 return [a,b,c]
//             }
//         }
//     }
// }

// function repeatSearch(arr,search){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i].toString() == search.toString()){
//             return true
//         }
//     }
//     return false;
// }


// ***************性能的测试，开始到结束的时间****************
// console.time('开始测试')
// var a = threeSum([-1, 0, 1, 2, -1, -4])
// console.timeEnd('开始测试')
// console.log(a)

// function bubbleSort2(arr) {
//     console.time('改进后冒泡排序耗时');
//     var i = arr.length-1;  //初始时,最后位置保持不变
//     while ( i> 0) {
//         var pos= 0; //每趟开始时,无记录交换
//         for (var j= 0; j< i; j++)
//             if (arr[j]> arr[j+1]) {
//                 pos= j; //记录交换的位置
//                 var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
//             }
//         i= pos; //为下一趟排序作准备
//      }
//      console.timeEnd('改进后冒泡排序耗时');
//      return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46];
// console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

const g = {b:3}
console.log(g.b)
g.b=12;
console.log(g.b)

