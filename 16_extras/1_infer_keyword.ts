/* 
    Infer Keyword
    infer -> 추론한다, 유추한다

    (Inferring Type in Conditional Type)

    Infer Keyword 는  Conditional Type 에서만 사용 가능한 키워드다.
    그러니 extends 키워드를 사용했을 때 extend 한 대상에서 타입을 한번더 추론하는 역할을 한다.
*/

// 1 가장 많이 사용하는 예제
// Flattening -> array를 벗겨낼 때
// string[] -> string
// string[][] -> string[]
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten2<Type> = Type extends (infer ElementType) [] ? ElementType : Type;


type StringArray = Flatten<string[]>;
type NumberArray = Flatten<number[]>;
type TwoDArray = Flatten<boolean[][]>;

// 2 Return Type 추론
type InferReturnType<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;

type NumberArray2 = InferReturnType<number []>;

type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;


// infer 키워드를 사용하면 조건문속에서 한번더 특정 타입을 추론할수 있게 해주며 추론한타입으로 새로운타입을 반환할수 있게 해준다.