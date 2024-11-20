/* 
    Inheritance
*/

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다.`)
    }
}

class Child extends Parent {
    age:number;
    
    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }

    sing() {
        console.log(`child : ${this.name}이 노래를 부릅니다.`);
    }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();

ahri.dance();
ahri.sing();

let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;

person2 = ahri;

/* 
    구조가 비슷하면 같은타입이라고 보는 타입스크립트 특징
*/

class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends Parent2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;

child = cf2;


/* 
구조적 타이핑: TypeScript에서는 **구조적 타이핑(structural typing)**을 사용합니다. 즉, 객체가 가진 속성과 메서드가 동일하면 같은 타입으로 간주합니다. 이를 덕 타이핑(duck typing)이라고도 합니다.

avaScript와 TypeScript의 클래스가 OOP와는 다른 이유:

JavaScript의 클래스는 전통적인 OOP 언어(C++, Java 등)의 클래스와는 다릅니다. JavaScript는 프로토타입 기반 언어이므로, 객체의 상속을 프로토타입 체인으로 구현합니다.
TypeScript는 정적 타입과 인터페이스를 추가하여 JavaScript 클래스의 구조를 더 OOP에 가깝게 만들지만, 런타임에서는 여전히 JavaScript로 작동하므로 완벽히 전통적인 OOP라고 할 수는 없습니다.

    자바에서는 엄격한 객체지향 룰로 인해 클래스를 만들어야 new로 객체를 생성할수 있으나 자바스크립트에서는 전통적인 OOP개념이 아니라서
    클래스 생성없이도 객체를 생성해서 유연한 상속을 할 수 있다.

    프로토타입 체인은 객체가 다른 객체를 상속받아 속성이나 메서드를 공유할 수 있는 JavaScript의 구조적 특징
*/
