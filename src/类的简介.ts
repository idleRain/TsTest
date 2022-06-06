class Person {
    // readonly 只读的
    readonly name: string = '小丁'
    // static 静态的
    static age: number = 18
    // 静态只读
    static readonly gander: string = '男'
}

// 创建一个 Person 的实例对象
const p = new Person()

// p.name = '小何'    // 给只读属性赋值会报错
console.log(p.name)
// 静态属性不需要通过实例访问
console.log(Person.age)

console.log(Person.gander)
