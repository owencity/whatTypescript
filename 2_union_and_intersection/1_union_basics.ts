/* 
    유니언은 TS에서 타입을 병합할 수 있는 수많은 방법중 하나이다. 
*/
type StringOrBooleanType = string | boolean; 

let StringOrBooleanType: StringOrBooleanType = '아이브';
StringOrBooleanType = true; 

// StringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

// 리터럴 ?
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/* 
    리스트의 유니언
*/
type StringListOrBooleanList = string[] | boolean[]; // 유니언이지만 합쳐서 값입력 불가

let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담',
]

// strListOrBooleanList = [
//     true,
//     '아이유'
// ]

type StrOrNumberList = (string | number ) []; // [] 리스트 표현방식 어디에 있는지 중요

let stringOrNumberList = [
    1, 2, 3,
    '아이유',
    '레드밸벳'
]

/* 
    인터페이스 사용하는 유니언
*/

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human; // type 으로 형성하는게 에러를 파악하는데 더 수월하다.

let animalOrHuman: AnimalOrHuman = {
    name: '최지호',
    age: 32,
    address : '대한민국',
}

console.log(animalOrHuman);
// Human 에는 address가 있기떄문에 Human 타입으로 추론한다. 

animalOrHuman = {
    name: '오리',
    age: 9 ,
}

console.log(animalOrHuman); // Animal 타입 
// console.log(animalOrHuman.address); 

let animalOrHuman2: {
    name: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman2.address);


// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | cat;

const personOrCat: PersonOrCat = {
    name: '코드팩토리',
    age: 32,
    breed: 'yorkshire Terrier',
    country: '영국',

}

// 유니온은 집합의 개념이다. (합집합)