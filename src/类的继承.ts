// 创建一个动物的父类
// abstract 创建抽象类，抽象类可以被继承 但 不能创建实例
abstract class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 定义一个抽象方法， 抽象方法必须被子类重写
    abstract say(): void
}

// 创建一个 🐱 的类， 继承自 Animal
class Cat extends Animal {
    // 重写 say 方法
    say() {
        console.log('喵喵')
    }
}
// new 一个 猫 的实例对象
const c = new Cat('小狗', 4)

console.log(c.name,c.age)
c.say()
