/* 
    Interface
*/

interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
   name: string;
   age: number;

   constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
   }

   jump():string {
    return `${this.name}이 점프를 합니다.`
   }

   dance() {

   }
}

let ori : any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal{
    return 'jump' in object;
}

if(instanceOfAnimal(ori)){
    ori;
}

/* 
    다중 인터페이스 구현
*/

interface Pet {
    legsCount: number;
    bark():void;
}

class Cat implements Animal, Pet {
    name: string;
    age: number;

    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    bark(): void {
        console.log('냐옹');
    }
}

type AnimalAndPet = Animal & Pet;

class Cawt2 implements AnimalAndPet {
    name: string;
    age: number;

    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    bark(): void {
        console.log('냐옹');
    }

}

interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     // name: string;
//     name: number | string;
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor{
    new (name: string, age: number) : Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age:number) {
    return new constructor(name, age)
}

createIdol(Idol, '아이유', 32);