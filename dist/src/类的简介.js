class Person {
    constructor() {
        // readonly 只读的
        this.name = '小丁';
    }
}
// static 静态的
Person.age = 18;
// 静态只读
Person.gander = '男';
// 创建一个 Person 的实例对象
const p = new Person();
// p.name = '小何'    // 给只读属性赋值会报错
console.log(p.name);
// 静态属性不需要通过实例访问
console.log(Person.age);
console.log(Person.gander);
//# sourceMappingURL=%E7%B1%BB%E7%9A%84%E7%AE%80%E4%BB%8B.js.map