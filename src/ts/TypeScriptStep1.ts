

///定义函数
function introduceYourSelf(age: number, name?: string): string {
    return '大家好，我叫' + name + '，今年' + age + '岁了。'
}

const result = introduceYourSelf(18, '小白')
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
    option?: boolean;
}

//
const yourObject: ChineseObject ={sex: '女', interest: '打游戏', option: true};
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

/***************************************TypeScript学习记录*******************************************************/
function hello() {
    const web = "Hello World"
    console.log(web)
}

hello();

/*静态类型*/
const myAge = 18;
console.log(myAge)

//自定义静态类型
interface LuBanQiHao {
    name: string;
    age: number;
}

const myLB: LuBanQiHao = {
    name:"鲁班七号",
    age:40,
}

console.log(myLB.name)

/***********基础静态类型和对象类型*********/
//基础静态类型
const count = 234;
const yourName = "杭州市"
console.log(count + "************" + yourName)

//对象类型
const City = {
    name:"杭州市",
    provice:"浙江省",
};

console.log(City.provice+City.name)

const stringArray: string[] = ["12", "23", '33']

class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const dog = new Animal("狗", 10)
console.log(dog.name)

//函数类型返回值
const HeroName: () => string = () => {
    return '夏侯惇';
}

console.log(HeroName)

/***********类型注释和类型推断*********/
//类型注解
let typeCount: number;
typeCount = 666
typeCount = 999

//类型推断
function addNumber(first: number, second: number): number {
    return first+second;
}

const total = addNumber(1,65)

//函数没有返回值
function printHello(): void {
    console.log("Hello")
}
printHello();

//never返回值类型
function errorFunction(): never {
    console.log("never返回值类型")
    throw new Error()
    console.log("Hello World")
}

// function forCycleNeverFunction(): never {
//     console.log("for循环")
//     while (true) {
//         console.log('11111')
//     }
//     console.log("forCycleNeverFunction")
// }

errorFunction()
// forCycleNeverFunction()

const list = ["1212", 3434, {name:"haha"}]
list.forEach((item) => {
    console.log(item)
})

const mixArray: (number | string)[] = ["滑动的", 1, 2.3, 235, "滑动的"]
console.log(mixArray)

//数组中对象类型的定义
type HeroProperty = {name: string, height: number};//类型别名
const ourHeros: HeroProperty[] = [
    {name: "鲁班", height: 120},
    {name: "鲁班大师", height: 180},
]

console.log(ourHeros)

class HeroClass {
    name: string;
    height: number;

    constructor(name: string, height: number) {
        this.name = name
        this.height = height;
    }
}

const enemyHeros: HeroClass[] = [
    {name: "鲁班", height: 120},
    {name: "鲁班大师", height: 180},
]

console.log(enemyHeros)

/*元组：把数组中的每个元素位置固定住了，就叫元组。*/
const yuanzuArray: [number, number, number, string, any] = [
    123,
    456,
    789,
    "字符串",
    {name:"熊明"}
]

console.log(yuanzuArray)

/********interface接口*********/
interface HeroTemplate {
    name: string,
    age: number,
    height: number,
    isMerry?:boolean,
    [killAnyOne: string]: any,
    killed:any,
    speakChinese():void,
    speakEnglish(): string,
}

const getYourHero = (hero: HeroTemplate) => {
    console.log(hero.age, hero.name, hero.height)
}

const yourHero: HeroTemplate = {
    name: "哈吉",
    age: 33,
    height: 200,
    killed: false,
    speakChinese(): void {
        console.log("speakChinese")
    },
    speakEnglish(): string {
        return "speakEnglish"
    }
}

getYourHero(yourHero)
/*接口和类型别名的区别：类型别名可以是任意类型， 对象，string， number；但是接口interface必须是一个对象*/
type PersonNameType = string;

/*接口和类的约束*/
class XiaHouDun implements HeroTemplate {
    name: string;
    age: number;
    height: number;
    killed: boolean;

    constructor(name: string, age: number, height: number, killed: boolean) {
        this.age = age
        this.name = name
        this.height = height
        this.killed = killed
    }

    speakChinese(): void {
        console.log("speakChinese")
    };
    speakEnglish(): string {
        return "speakEnglish"
    }
}

/*接口的继承*/
interface TankHeroTemplate extends HeroTemplate {
    tank(): string;
}

const tankHero: TankHeroTemplate = {
    name: "坦克",
    age: 33,
    height: 200,
    killed: false,
    speakChinese(): void {
        console.log("speakChinese")
    },
    speakEnglish(): string {
        return "speakEnglish"
    },
    tank(): string {
        return "坦克英雄分类"
    }
}