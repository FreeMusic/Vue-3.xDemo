import { createApp } from 'vue'
import router from "@/router";
import {store} from "@/router/store";
import App from "./App.vue";

const app = createApp(App).use(router).use(store)

const vm = app.mount('#app')
console.log(vm)


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