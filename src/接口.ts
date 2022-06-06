// 创建一个接口
// 接口相当于是类的规范
interface myInterface {
    name: string,

    sayHi(): void
}

// 创建一个类实现接口
class Student implements myInterface {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHi(): void {
        console.log('hi!')
    }

}

const s = new Student('小丁')
console.log(s.name)
s.sayHi()
