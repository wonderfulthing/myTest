// !方法属性的简洁写法
// function f(x, y) {
//     return {
//         x,
//         y
//     };
// }

// 等同于

// function f(x, y) {
//     return {
//         x: x,
//         y: y
//     };
// }

// f(1, 2) // Object {x: 1, y: 2}
// *方法简写
// const o = {
//     method() {
//         return "Hello!";
//     }
// };

//  等同于

// const o = {
//     method: function () {
//         return "Hello!";
//     }
// };

// !属性表达式
// let name = '_hah      haha'
// let obj = {
//     [name]: 'oooo',
//     a: '111'
// }
// console.log(obj[name])
// let obj = {
//     ['h' + 'ello']() {
//         return 'hi';
//     }
// };

// obj.hello() // hi

// !函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
// *如果对象的方法使用了取值函数（getter）和存值函数（setter），
// *则name属性不是在该方法上面，而是该方法的属性的描述对象的get和set属性上面，
// *返回值是方法名前加上get和set
// ?bind方法创造的函数，name属性返回bound加上原函数的名字；
// ?Function构造函数创造的函数，name属性返回anonymous
// const obj = {
//     get foo() {},
//     set foo(x) {}
// };

// obj.foo.name
//  TypeError: Cannot read property 'name' of undefined

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

// descriptor.get.name // "get foo"
// descriptor.set.name // "set foo"
// !对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为
// !Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
// *描述对象的enumerable属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性
// ?for...in循环：只遍历对象自身的和继承的可枚举的属性。
// ?Object.keys()：返回对象自身的所有可枚举的属性的键名。
// ?JSON.stringify()：只串行化对象自身的可枚举的属性。
// ?Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性
// *ES6 规定，所有 Class 的原型的方法都是不可枚举的

// let obj = { foo: 123 };
// Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

// Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// false

// Object.getOwnPropertyDescriptor([], 'length').enumerable
// false

// !ES6 一共有 5 种方法可以遍历对象的属性
// for ... in
// Object.keys(obj)
// Object.getOwnPropertyNames(obj)
// Object.getOwnPropertySymbols(obj)
// Reflect.ownKeys(obj)

// 属性遍历的次序规则。
// 首先遍历所有数值键，按照数值升序排列。
// 其次遍历所有字符串键，按照加入时间升序排列。
// 最后遍历所有 Symbol 键，按照加入时间升序排列。



// !关键字super，指向当前对象的原型对象
// *super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错
// *目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法

// const proto = {
//     foo: 'hello'
// };

// const obj = {
//     foo: 'world',
//     find() {
//         return super.foo;
//     }
// };

// Object.setPrototypeOf(obj, proto);
// obj.find() // "hello"

// 报错
// const obj = {
//     foo: super.foo
// }

// 报错
// const obj = {
//     foo: () => super.foo
// }

// 报错
// const obj = {
//     foo: function () {
//         return super.foo
//     }
// }

// !ES6 规定，变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式
// let { x, ...{ y, z } } = o;
// SyntaxError: ... must be followed by an identifier in declaration contexts

// !扩展运算符
// let foo = { ...['a', 'b', 'c'] };
// foo
// {0: "a", 1: "b", 2: "c"}

// !如果想完整克隆一个对象，还拷贝对象原型的属性
// 写法一
// const clone1 = {
//     __proto__: Object.getPrototypeOf(obj),
//     ...obj
// };

// 写法二
// const clone2 = Object.assign(
//     Object.create(Object.getPrototypeOf(obj)),
//     obj
// );

// 写法三
// const clone3 = Object.create(
//     Object.getPrototypeOf(obj),
//     Object.getOwnPropertyDescriptors(obj)
// )

// !修改现有对象部分的属性
// let newVersion = {
//     ...previousVersion,
//     name: 'New Name' // Override the name property
// };