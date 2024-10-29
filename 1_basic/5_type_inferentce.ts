/* 
    Type Inference

    타입추론
*/

let stringType = 'string';
let booleanType = true;
let numberType = 30; 

booleanType = false;
// booleanType = 'false';

const constStringType = 'const string'; // const 스트링 리터럴 타입, 해당 문자만 입력할수있다
const constBooleanType = true; // const로 선언시 더 구체적인 타입으로 추론한다. 

let yuJin = {
    name: '안유진',
    age: 2003
}

const yuJin2 = {
    name: '안유진',
    age: 2003
}

yuJin2.name = '코드팩토리';
console.log(yuJin2);

const yuJin3 = {
    name: '안유진' as const, // const 로 캐스팅 (as 사용)
    age: 2003 as const,
}

// yuJin3.name = '코드팩토리';
console.log(yuJin3.name);

// 타입스크립트 사용시 데이터의 타입흐름을 정확하게 파악할수있다

/* 
    Array
*/

let numbers = [1, 2, 3, 4];
let numbersAndString = [1, 2, 3, '4', '5']; 

// numbers.push('6');

const number = numbers[0];
const nos = numbersAndString[0]; 
const nos2 = numbersAndString[100];

const twoNumbers = [1, 3] as const; // 튜플 