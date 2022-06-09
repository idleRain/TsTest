// enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// 定义一个 对象
let i;
i = {
    name: '小丁',
    gender: 1
};
console.log(i.gender === Gender.Female);
let aa;
aa = 2;
// aa = '3'     // 不行
//# sourceMappingURL=type.js.map