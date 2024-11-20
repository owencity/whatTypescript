/*
    Types
*/

let helloText: String = 'Hello';
// helloText = true;

/* 
7개의 타입 
TS 는 자박스크립트 ES 버전에 따라간다. 
소문자로 작성한다. 
 */

const StringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(9999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined; 
// undefined 명시하는건 권장되지않으나 이런타입이 있다

/* 
TS에만 존재하는 타입
*/

// any - 아무타입이나 입력할 수 있는 치트키 같은 타입
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;
// any는 자바스크립트의 기본타입과 같다. 적절하게 사용하고 과하게 남용X

let testNumber: number = anyVar;
let testString: string = anyVar;

// unknown - 알 수 없는 타입 , 다른타입에 변수에 할당 불가 unknown에만 가능
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// never - 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';
// 함수 , 인터섹션

/* 
    리스트타입 
*/

const koreanGirlGroup : string[] = ['아이브', '레드벨벳'];
// string[] -> string 으로 리스트(배열) 만들겠다.
const booleanList: boolean[] = [true, false]


// 프로덕션 환경 : 소프트웨어나 애플리케이션이 실제 사용자들에게 배포되어 운영되는 환경을 의미
// 실제 서비스가 제공되고 사용자가 직접 접근하여 사용하는 최종단계

/*  JS는 동적타입언어, 변수 타입이 런타임에 결정된다. 컴파일 단계에 오류를 잡아내지 못하기때문에 TS를 써서 컴파일단계에 미리확인하고 오류를 사전방지한다.
    TS는 컴파일 한번 해서 프로덕션 환경에 올리면 ts가 아닌 js로 실행된다.
    1. TS 작성 : 개발자는 TS로 코드를 작성해 타입을 명시하고 오류를 사전에 방지한다.
    2. 컴파일 : TS는 tsc를 사용하여 js로 변환된다.
    3. 프로덕션 환경배포 : 컴파일된 js파일이 실제로 프로덕션 환경에서 실행된다. 
 */