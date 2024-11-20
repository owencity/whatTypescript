/* 
    Property check
    초과성 검사
*/

type TName = {
    name:string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

const testName: TName = iu;
const testAge: TAge = iu;

// 타입을 선언하고나서 초과하는속성을 넣을수 없다.
// 타입스크립트는 우리가 빌드타임에 확인하는 용도일뿐, 결국 자바스크립트로 컴파일되면 크게 의미가없어진다.
