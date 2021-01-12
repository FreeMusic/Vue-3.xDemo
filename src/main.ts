import { createApp } from 'vue'
import router from "@/router";
import {store} from "@/router/store";
import App from "./App.vue";

const app = createApp(App).use(router).use(store)

const vm = app.mount('#app')
console.log(vm)


///定义函数
function introduceYourSelf(age: number, name?: string): string {
    return '大家好，我叫' + name + '，今年' + age + '岁了。'
}

const age = 18
const name = '小白'
const result = introduceYourSelf(age, name)
console.log(result)

function whatKindOfSubjectDoyouLike(name='大壮',subject='语文'): string {
    return name + '最喜欢的科目是：' + subject
}

const message1 = whatKindOfSubjectDoyouLike()
const message2 = whatKindOfSubjectDoyouLike('小黑', '数学')
console.log(message1)
console.log(message2)

///多个不确定参数函数
function discripSummer(...words: string[]): string {
    let find = ''
    for (let i = 0; i < words.length; i++) {
        find = find + words[i]
        if (i < words.length - 1){
            find = find + '、'
        }
    }

    return find + '的夏天'
}

const find = discripSummer('吃冰淇淋', '1111', '222222', '3333333', '3423432423')
console.log(find)

/**************************三种函数的定义方式*******************************/

/*函数声明法*/
function add(first: number, second: number) {
    return first + second;
}

console.log(add(3, 2))

/*函数式表达法*/
const service = function (first: number, second: number) {
    return first + second
}

console.log(service(3, 2))

/*箭头函数*/
const arrow = (first: number, second: number): number => {
    return first + second
}

console.log(arrow(3, 2))

/**************************变量的作用域*******************************/
let yangzi = '刘德华'
function zhengxing() {
    console.log(yangzi)
    yangzi = '宋小宝'
}
zhengxing()
console.log(yangzi)

/*自定义对象*/
const yase = {
    name:'亚瑟',
    dazhao:'在你头上暴扣',
    age:103,
    shifangjineng:function () {
        console.log(this.dazhao)
    },
    options:{
        jineng1:"1技能",
        jineng2:"2技能",
        jinengda:"大招",
    }
}

console.log(yase.name)
console.log(yase.options.jinengda)
yase.shifangjineng()

/*数组*/
const array: number[] = [1, 3]
console.log(array)

const stringsArray: Array<number> = [2,3]
console.log(stringsArray)

/*元祖*/
const yuanzu: [string, number] = ['nnnn', 23]
console.log(yuanzu)

/*字符串*/
const newString = '123456789123456789123456789123456789-089-'
const mubiao = '-'
console.log(newString.length)
//头部查找
console.log(newString.indexOf(mubiao))
//尾部查找
console.log(newString.lastIndexOf(mubiao))
//截取字符串 区间
console.log(newString.substring(3, 30))
//截取字符串 开始到结尾
console.log(newString.substring(6))
//字符串的替换
console.log(newString.replace('-', '*'))

/*日期对象*/
const date = new Date()
console.log(date)

const date1 = new Date(1000)
console.log(date1)

const date2 = new Date(2000)
console.log(date2)

const date3 = new Date('yyyy-MM-ddThh:mm:ss')
console.log(date3)

const date4 = new Date(2222, 12, 4, 24, 45, 56)
console.log(date4)

/*正则表达式  RegExp*/
const exp = /1234567890/
console.log(exp)
//test方法 在字符串中查找是否存在指定的正则表达式并返回布尔值，存在true，不存在 false
const testString = '1234567890'
console.log(exp.test(testString))
//exec用于在字符串中查找指定正则表达式，如果exec()方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回null
console.log(exp.exec(testString))

/*类的声明和使用
public 共有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符
protected 受保护的修饰符，可以在本类和子类中使用protected修饰的属性或者行为
private 私有修饰符，只可以在类内使用private修饰的属性和行为
* */
class Hero{
    name: string;
    age: number;
    public readonly sex: string;
    protected lover: string;
    private ancestral: string;

    constructor(name: string, age: number, sex: string, lover: string, ancestral: string) {
        this.name = name
        this.age = age
        this.sex = sex
        this.lover = lover
        this.ancestral = ancestral
    }
    optoions(){
        console.log('大招');
    }
}

const hero = new Hero('后羿', 23, '男', '凤姐', '祖上富有')
hero.name = '鲁班'
console.log(hero)
hero.optoions()

/*类的继承*/
class SuperHero extends Hero{
    superOptions(){
        console.log('超级大招')
    }

    optoions(){
        super.optoions()
        console.log('我也可以有超级大招')
    }
}

const superHero = new SuperHero('剑圣', 45, '💊', '喜事', '祖上富有')
superHero.superOptions()
superHero.optoions()

/*接口*/
interface ChineseObject{
    sex: string;
    interest: string;
    maiBB?: boolean;
}

//
const yourObject: ChineseObject ={sex: '女', interest: '打游戏', maiBB: true};
console.log(yourObject)

//接口规范化
interface SearchObject{
    (source: string, subString: string): boolean;
}

const search: SearchObject = function (source: string, subString: string): boolean{
    const flag = source.search(subString)
    return (flag != -1)
}
console.log(search('高、富、帅、德','胖'))

/*命名空间*/
// namespace shuaiGe {
//     export class Dehua {
//         name = '刘德华'
//         talk(){
//             console.log('我是帅哥刘德华')
//         }
//     }
// }
//
// namespace bajie {
//     export class Dehua{
//         name = '马德华'
//         talk(){
//             console.log('我是八戒马德华')
//         }
//     }
// }
//
// const shuaiDehua = new shuaiGe.Dehua()
// const bJDehua = new bajie.Dehua()
//
// shuaiDehua.talk()
// bJDehua.talk()
