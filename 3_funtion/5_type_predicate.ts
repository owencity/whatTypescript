/* 
     Type predicate
    반환 타입을 변수 is 타입으로 적어주는게 제일 중요하다.
    if문을 통해서 내로잉을했을떄 정확한 타입을 유추할수있다.
    일반 타입을 반환하게되면 정확한 타입을 유추하지못한다.
*/

function isNumber(input: any): input is number {
    return typeof input === 'number';
}
// is number 과 같은 타입 판별함수는 TypeScript 만의 특별한 기능입니다. 특정타입임을 확신 시키기 위한 힌트를 제공, 어떠한 타입이라고 정확히 내로잉 할수있게된다. 

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}

// 단순한 boolean 타입으로 힌트를 받을수도 없으며 true , false 반환시 그 리턴값으로 어떤타입인지 확실할수 없기 때문에 any타입을 반환하게되는것이다.

let number: any = 5;

if(isNumberRetBool(number)) {
    number;
}

if(isNumber(number)) {
 number;
}

interface Doge{
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}


if(isDoge(doge)) {
    doge;
} else {
    doge;
}


