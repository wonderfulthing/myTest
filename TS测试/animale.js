var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animale = /** @class */ (function () {
    function Animale(theName) {
        this.name = theName;
    }
    Animale.prototype.eat = function () {
        console.log(this.name + "\u5403\u98DF\u7269");
    };
    return Animale;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(theName) {
        // super在官网上的解释是:继承属性时，在使用this之前一定要先试用super，和call有点类似，
        // constructor 内的 super(): 执行父类的构造函数。必须至少执行一次。
        return _super.call(this, theName) || this;
    }
    Dog.prototype.eat = function () {
        // 一般方法内的 super.method(): 执行父类的 (未必同名的) 方法。不是必需。
        // super.method(...) 等价于 父类的构造函数.prototype.method.call(this, ...)。
        // super.eat()
        console.log('并且吃的是狗粮');
    };
    return Dog;
}(Animale));
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(theName) {
        return _super.call(this, theName) || this;
    }
    // 子类重写基类方法
    People.prototype.eat = function () {
        console.log(this.name + "\u62D2\u7EDD\u5403\u72D7\u7CAE");
    };
    return People;
}(Animale));
var animal = new Animale('动物');
animal.eat();
var dog;
dog = new Dog('狗');
dog.eat();
var people;
people = new People('人类');
people.eat();
