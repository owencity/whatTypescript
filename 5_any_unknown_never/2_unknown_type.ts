/* 
    Unknown Type
*/

let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 할당에서의 차이 

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;


let anyType: any = unknownValue;
let unknownType: unknown = unknownValue; // 이 둘을 제외하고는 할당 불가, 어사인?
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase(); // unknown 불가
// unknownValue.name;
// new unknownValue(); 
// unknown 이 더 타이트한 타입

function isString(target: unknown) : target is string {
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)) {
    testVal;
}

/* 
    Union Type
*/

type UOrString = unknown | string;
type uOroBoolean = unknown | boolean;
type uOrNumber = unknown | number;

/* 
    Intersection Type
*/

type uAndString = unknown & string;
type uAndBoolean = unknown & boolean

/* 
    Operator 사용
*/

let number1: unknown = 10;
let number2: unknown = 20;


// number1 + number2;
// unknown 타입은 + , - , / 이런 연산 불가 


number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
// 위의 연산은 가능


