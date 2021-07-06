import { createApp } from 'vue'

/***************类和概念的使用**************/
class Hero {
    content = "hello";
    sayHello() {
        return this.content
    }
}

const hero = new Hero()
hero.sayHello()

//类的继承
class DianWei extends Hero {
    spaek(){
        console.log("说you can")
    }
}

const dianWei = new DianWei()
dianWei.spaek()
dianWei.sayHello()

//类的重写
class YaSe extends Hero {
    content = "亚瑟";
    sayHello(): string {
        return "我是亚瑟";
    }
}

const yaSe = new YaSe()
yaSe.sayHello()

//super关键字的使用
class HuangZhong extends Hero {
    content = "我是黄志文";
    sayHello(): string {
        return super.sayHello() + "傻乎乎的黄忠";
    }
}

const huangZhong = new HuangZhong()
huangZhong.sayHello()

/***************类的访问类型: private, protected, public。默认为public，public内外皆可调用；
 * private只允许内部调用，外部不允许。
 * protected在其内部以及子类中可以调用。
 * **************/
class Animal {
    public name: string;
    private age: number;
    protected canFly: boolean;
    eatSomeThing(){
        console.log("111111")
    }

    constructor(name: string, age: number, canFly: boolean) {
        this.name = name
        this.age = age
        this.canFly = canFly
    }
}

class Cat extends Animal{
    catSay(){
        console.log(this.name)
    }
}

const yellowCat = new Cat("狸花猫", 3, false)
console.log(yellowCat.name)

/***************类的构造函数**************/
//继承中的构造函数写法
class Dog extends Animal{

    constructor(isInCity: boolean, age: number) {
        super("狗", age, false);
    }

    catSay(){
        console.log(this.name + this.canFly)
    }
}

const yellowDog = new Dog( false, 5)
console.log(yellowDog.name)

//类的构造函数简化写法
class Fish {
    constructor(public environment: string) {
    }
}

const riverFish = new Fish("淡水鱼")
console.log(riverFish.environment)

/***************类的Getter, Setter, static使用**************/
class Girl {
    constructor(private _age: number) {}
    getAge() {
        return this._age
    }

    setAge(age: number){
        this._age = age
    }
}

const girl = new Girl(28)
console.log(girl.getAge())
girl.setAge(25)
console.log(girl.getAge())

/////类中的static
class Boy {
    static playBall(){
        console.log("打篮球")
    }
}

Boy.playBall()

/***************类的只读属性和抽象类**************/
class BlackBoy {
    public readonly hairClocr: string;

    constructor(hairClocr: string) {
        this.hairClocr = hairClocr;
    }
}

const blackBoy = new BlackBoy("黑色")
console.log(blackBoy.hairClocr)

//抽象类的使用

abstract class CatLikelyAnimal{
    abstract ourWeight(): void;
}

class Tiger extends CatLikelyAnimal{
    ourWeight() {
        console.log("300kg")
    }
}
class Lion extends CatLikelyAnimal{
    ourWeight(): void {
        console.log("250kg")
    }
}
class Leopard extends CatLikelyAnimal{
    ourWeight(): void {
        console.log("100kg")
    }
}

const tiger = new Tiger()
const lion = new Lion()
const leopard = new Leopard()

tiger.ourWeight()
lion.ourWeight()
leopard.ourWeight()

/***************联合类型和类型保护**************/
interface Waiter {
    canTeach: boolean;
    waitOther(): void;
}

interface Teacher {
    canTeach: boolean;
    teach(): void;
}

///类型保护-----类型断言
function findRealOne(anyOne: Waiter | Teacher) {
    if (anyOne.canTeach) {
        (anyOne as Teacher).teach()
    }else {
        (anyOne as Waiter).waitOther()
    }
}

const teacher: Teacher = {
    canTeach: true,
    teach(): void {
        console.log("老师")
    }
}

const waiter: Waiter = {
    canTeach: false,
    waitOther(): void {
        console.log("服务员")
    }
}

findRealOne(teacher)

///类型保护----in语法
function findRealOneIn(anyOne: Waiter | Teacher) {
    if ("teach" in anyOne) {
        anyOne.teach()
    }else{
        anyOne.waitOther()
    }
}

findRealOneIn(waiter)

///类型保护----typeof语法
function AddNumber(first: string | number, second: string | number) {
    if (typeof first == "string" || typeof second == "string"){
        return `first: ${first}**********second: ${second}`
    }
    return  first + second
}

const addTotal = AddNumber(2, "4")
console.log(addTotal)

///类型保护----instead of 语法
class NumberObject {
    count: number;

    constructor(count: number) {
        this.count = count
    }
}

function AddObject(first: object | NumberObject, second: object | NumberObject) {
    if (first instanceof NumberObject && second instanceof NumberObject){
        return first.count + second.count
    }

    return 0
}

const firstNumberObject = new NumberObject(66)
const secondNumberObject = new NumberObject(33)
const totalObject = AddObject(firstNumberObject, secondNumberObject)
console.log(totalObject)

/***************枚举类型**************/
enum AnimalEnum {
    Cat,
    Dog,
    Tiger,
}

function WhatKindOfAnimalDoYouLike(animalType: AnimalEnum) {
    switch (animalType) {
        case AnimalEnum.Cat:{
            console.log("Cat")
        }
            break;
        case AnimalEnum.Dog:{
            console.log("Dog")
        }
            break;
        case AnimalEnum.Tiger:{
            console.log("Tiger")
        }
            break;
    }
}

WhatKindOfAnimalDoYouLike(AnimalEnum.Tiger)
WhatKindOfAnimalDoYouLike(1)
console.log(AnimalEnum.Tiger, AnimalEnum[1])

/***************泛型**************/
function JoinTogether<GenericObject>(first: GenericObject, second: GenericObject) {
    return `${first}${second}`;
}

console.log(JoinTogether<string> ("23", "45"))

//泛型数组的使用
function JoinArray<GenericObject>(list: GenericObject[]) {
    console.log(list)
}

JoinArray<string>(["123", "456"]);

function JoinList<GenericObject>(list: Array<GenericObject>) {
    console.log(list)
}

JoinList<string>(["789", "123"])

//多个泛型的定义
function JoinManyObject<GenericObject, TObject>(first: GenericObject, second: TObject){
    console.log(`${first}${second}`)
}

JoinManyObject<string, number>("123", 900)

//泛型的类型判断
JoinManyObject("234", 677)

class SelectHero<GenericObject> {

    constructor(private heros: GenericObject[]) {}

    getHero(index: number): GenericObject{
        return  this.heros[index]
    }
}

const selectHero = new SelectHero <string> (["鲁班", "后羿", "胖子猪"])
console.log(selectHero.getHero(2))

//泛型中的继承
interface HeroFFF {
    name: string;
}

class NewSelectHero<GenericObject extends HeroFFF> {
    constructor(private heros: { name: string }[]) {}
    getHero(index: number): string {
        console.log(this.heros[index].name)
        return this.heros[index].name
    }
}

const newSelectHero = new NewSelectHero(
    [
        {name: "鲁班"},
        {name: "后羿"},
        {name: "胖子猪"},
    ]
)

newSelectHero.getHero(1)


/***************Namespace命名空间**************/