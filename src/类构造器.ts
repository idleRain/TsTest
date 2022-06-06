class Dog {
    name: string
    age: number

    // 构造器
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const d = new Dog('小黑', 3)

console.log(d.name)
