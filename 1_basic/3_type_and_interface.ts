/* 
    Type and Interface
*/

/* 
    타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
*/

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female'; // 유니온타입

const stringVar: NewStringType = 'text';

type IdolType = {
    name: string;
    year: number;
}

const yuJin: {
    name: string;
    year: number;
} = {
    name: '안유진',
    year: 2002,
}

/* 
    Interface
*/

interface IdolInterface { // 인퍼페이스는 = 이 없다 
    name: string;
    year: number;
}

const yuJin2 : IdolInterface = {
    name: '안유진',
    year: 2002,
}

interface IdolIT {
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
};

interface IdolOptional {
    name: string;
    year?: number;
}
// ? 붙이면 입력해도되고 안해도되고
const yuJin4: IdolOptional = {
    name: '안유진',
    year: 2002,
}

/* 
    Type 과 interface 의 차이 
    1. interface 는 기본적으로 객체형식으로 입력
    원시타입 사용불가, type은 원시타입, 객체타입, 유니온타입, 튜플 등 다양한 형태로 사용가능
    2. 확장 가능성
    interface는 동일한 이름으로 선언하면 자동으로 병합, 여러 곳에서 같은 이름의 interface 정의시 속성들이 합쳐짐
    type은 중복선언 불가, 병합되지 않으며 기존 타입을 확장하려면 & (intersection) 사용
    3.type은 | (union) & (intersection) 여러 타입 결합 가능
    interface는 이런 유니온 타입을 지원하지 않는다.
    4. type은 TypeScript 내장 유틸리티 타입(예 : partial, Readonly, Pick)과 호화선이 뛰어나고 복잡한 타입변환 작업이 가능
    5. 함수 시그니처
    interface 와 type 모두 함수 타입 정의에 사용될 수 있지만, type은 더 복잡한 함수 조합에 유연하게 사용할 수 있다.
    6. 클래스 구현
    interface는 클래스에 implements하여 타입을 강제 할 때 주로 사용
    type은 클래스에서 implements 할수 없다.
*/




