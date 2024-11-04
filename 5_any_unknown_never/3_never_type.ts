/* 
    Never Type
*/

// 1. 함수에서 에러를 던질 때
function throwError() : never {
    throw Error();
}
// 2. 무한 루프
function infiniteLoop(): never {
    while(true) {

    }
}
// 3. 존재할수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;
// never 타입은 절대 일어날수 없는 상황이다


