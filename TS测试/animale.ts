class Animale {
    name: string
    constructor(theName: string) {
        this.name = theName
    }
    eat() {

        console.log(`${this.name}吃食物`)

    }
}

class Dog extends Animale {
    constructor(theName: string) {
        // super在官网上的解释是:继承属性时，在使用this之前一定要先试用super，和call有点类似，
        // constructor 内的 super(): 执行父类的构造函数。必须至少执行一次。
        super(theName)
    }
    eat() {
        // 一般方法内的 super.method(): 执行父类的 (未必同名的) 方法。不是必需。
        // super.method(...) 等价于 父类的构造函数.prototype.method.call(this, ...)。
        super.eat()
        console.log('并且吃的是狗粮')
    }
}

class People extends Animale {
    constructor(theName: string) {
        super(theName)
    }
    // 子类重写基类方法
    // 将基类中相同的名称进行重新编写只能执行一个方法，采用就近原则，就会实现重写的效果
    eat() {
        console.log(`${this.name}拒绝吃狗粮`)
    }
}

let animal = new Animale('动物')
animal.eat();

let dog: Animale
dog = new Dog('狗')
dog.eat()

let people: Animale
people = new People('人类')
people.eat()