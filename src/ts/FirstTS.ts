import vue from "vue";

var name: string = '字符串'
console.log(name)

enum PersonSex  {
    man = '男',
    woman = '女',
    unkown = '人妖'
}

enum Season {
    spring,
    sunmmer,
    autumn,
    winter
}

var unkown: any = 10
unkown = '字符创'
unkown = false

///Undefined :
// Number:数值类型;
// string : 字符串类型;
// Boolean: 布尔类型；
// enum：枚举类型；
// any : 任意类型，一个牛X的类型；
// void：空类型；
// Array : 数组类型;
// Tuple : 元祖类型；
// Null ：空类型。


///定义函数
function introduceYourSelf(age: number, name: string): string {
    return '大家好，我叫' + name + '，今年' + age + '岁了。'
}

var age:number = 18
var name: string = '小白'
var result: string = introduceYourSelf(age, name)
console.log(result)
