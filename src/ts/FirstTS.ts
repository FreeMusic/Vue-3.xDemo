import vue from "vue";

class FirstTS {

}



enum Season {
    spring,
    sunmmer,
    autumn,
    winter
}

let unkown: any = 10
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

const age = 18
const name = '小白'
const result: string = introduceYourSelf(age, name)
console.log(result)
