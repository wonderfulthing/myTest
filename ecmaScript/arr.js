//数组扩展运算符 好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列

console.log([1,2,3],...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
let rest = [1,2,3,4];

(function(a,b,c,d){
    console.log(a,b,c,d,arguments)
    //1,2,3,4 [1,2,3,4]
})(...rest)

function push(array, ...items) {
    array.push(...items);
}
function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42
// *在函数的参数中使用扩展运算符，可以很方便的把多个参数的情况简单化

function f(a,b,...c) { 
    console.log(a,b,c,arguments)
}
const args = [0, 1];
f(-1, ...args, ...[3]);

// !扩展运算符后面可以放置表达式
const arr = [
    ...(rest[0] > 0 ? ['a'] : []),
    'b',
];

// *扩展运算符如果放在括号中，JavaScript 引擎就会认为这是函数调用。如果这时不是函数调用，就会报错
//console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number

console.log(...[1, 2])
// 1 2

// !ES5复制一个数组
// const a1 = [1, 2];
// const a2 = a1.concat();
//  a2[0] = 2;
//  a1 // [1, 2]
// !ES6复制数组
// const b1 = [1, 2];
//  写法一
// const b2 = [...b1];
//  写法二
// const [...c2] = b1;
//  测试以上两种深浅拷贝程度
// const aa1 = [1,{a:1}]
// const bb1 = [...aa1]
// const [...cc1] = aa1
// bb1[1].a = 2;
// cc1[1].a = 3;
// console.log(aa1[1].a,bb1[1].a,cc1[1].a)
// 3 3 3 说明这几种方法都只是浅拷贝

// !数组的解构赋值
// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []
// *如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
// const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

//const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错

// !扩展运算符还可以将字符串转为真正的数组 
// !第一种写法，JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，采用扩展运算符就没有这个问题。
// 'x\uD83D\uDE80y'.length // 4
// [...'x\uD83D\uDE80y'].length // 3
// *正确返回字符串的长度
function length(str) {
    return [...str].length;
  }
  
length('x\uD83D\uDE80y') // 3


// !定义了遍历器接口的对象都可以用扩展运算符转为真正的数组
// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];

// console.log([...5]) // [0, 1, 2, 3, 4]


// !Array.from方法用于将两类对象转为真正的数组
// ?类似数组的对象（array-like object）
// ?可遍历（iterable）的对象
// *类数组对象主要是类似于下面arrayLike这种结构的对象，但是没有数组的方法；
// *所谓类似数组的对象，本质特征只有一点，即必须有length属性，扩展运算符不能实现这个功能
// Array.from({ length: 3 });
// [ undefined, undefined, undefined ]

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };

//  ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

//  ES6的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// ?Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// Array.from(arrayLike, x => x * x);
// 等同于
// Array.from(arrayLike).map(x => x * x);

// Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
// ?如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this

// !Array.of方法用于将一组值，转换为数组
// *弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
// Array.of(3, 11, 8) // [3,11,8]
// Array.of(3) // [3]
// Array.of(3).length // 1 
// Array方法参数不同的异常
// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]

// !数组实例的copyWithin方法 
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
// *将start-end的数据替换到target开始到结尾的数据
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3))

