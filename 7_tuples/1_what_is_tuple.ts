/*  
    Tuple
*/

// JS에서는 존재하지않는 개념, 타입스크립트에서 강제할수있음(빌드타임에만)

let iveToMembers : string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [Number, string] = [
    23, '코드팩토리'
] // 첫번쨰는 무조건숫자, 두번째는 무조건 스트링

numberAndStringTuple.push('아이유');

let unmodifiableTuple: readonly [number, string] = [
    23,
    '코드팩토리'
]

// unmodifiableTuple.push(); 
// readonly 만드는순간 push를 사용하지못함, tuple 사용시 readonly 사용

/* 
    Tuple 유추하기
*/

let actresses = ['김고은', '박소담', '전여빈'];

let actressesTuple = ['김고은', '박소담', '전여빈'] as const;
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
]


/* 
    Named Tuple
*/

const namedTuple: [name: string, age: number] = [
    '코드팩토리',
    32,
]


/* 
    Assigning Tuple to Tuple

    Tuple은 가은 타입끼리만 할당이 가능하다.
*/

const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;


/* 
    Tuple과 Array의 관계
*/

let ive: [string, string] = [
    '장원영',
    '안유진',
]

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;


/* 
    Multi Dimensional Tuple
*/

const tuple2D : [string, number][] = [
    ['코드팩토리', 32],
    ['아이유', 31],
    ['김고은', 30],
]