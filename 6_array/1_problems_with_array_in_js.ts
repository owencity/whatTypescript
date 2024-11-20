/* 
    Problems with Array in JS
*/

// JS에서는 아무거나 배열에 넣을수 있어서 문제

const number = [1, '2', 3, 4, '5'];

let strings: string[] = ['1', '2', '3'];

// strings.push(1);

let stringsOrNumbersArray: (string | number)[] = [  // string , number타입을 배열안에 다 넣을수있다.
      1, '2', 3 
    ]

let stringArrNumberArr: string[] | number[] = [  // string 또는 number 타입의 배열을 안에 다넣을수없고 각각의 타입으로만 생성이 가능하다.
    1, 2, 3 
]

stringArrNumberArr = [
    '1', '2', '3'
]

let stringOrNumberArr: string | number[] = [ // string 타입이거나 number 을 가진 배열타입으로만 생성이 가능하다.
    1, 2, 3
]

stringOrNumberArr = '4'

let boolsArr = [true, false, true];

const onlyString = ['1' , '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i = 0; i< onlyString.length; i++) {
    let item = onlyString[i];
}

for(let item of onlyNumbers) {

}

let number3 = onlyNumbers[0];

// 인덱스, 루프를 통한 연산할떄 정확한 타입을 유추할수있다.

let number4 = onlyNumbers[9999];

// 튜플이 아닌이상 타입스크립트는 인덱스의 길이를 신경쓰지않는다.
