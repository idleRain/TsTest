// enum 枚举
enum Gender {
    Male,
    Female
}

// 定义一个 对象
let i: { name: string, gender: Gender }
i = {
    name: '小丁',
    gender: 1
}
console.log(i.gender === Gender.Female)

// 给类型取别名
type myType = 1 | 2 | 3 | 4 | 5

let aa: myType

aa = 2
// aa = '3'     // 不行
