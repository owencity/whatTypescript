/* 
    Type vs Interface
*/


// Object 선언할 떄
interface IObject {
    x:number;
    y:number;
}

type TObject = {
    x:number;
    y:number;
}

// function 선언 할 때
interface IFunction {
    (x: number, y: number) : number;
}

type TFunction = (X: number, y: number) => number;


/* 
    Type에서는 할 수 있지만
    interface에서는 할 수 없는 것들 
*/

// 1 primitive 타입 선언하기
type name = string;

// 2 union 타입선언하기
type UnionTpye = string | number;

// 3 primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/* 
    Interface 는 할 수 있고
    Type은 못하는 것 
*/

// interface merging 
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

// 중복선언시 합쳐진다. 

let rectangle: IRectangle = {
    height : 200,
    width: 100,
}


// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

// Type 은 중복 불가.

/* 
    Interface Merging
*/

class Review {

    //프로퍼티 (인스턴스 귀속)
    getY = (x: number) => {return x};

    //메서드 (프로토타입 귀속)
    getX(x: number) {
        return x;
    }

    // js 프로토타입 강의 볼것
}

interface GetXnY {
    get: (X:number) => number;
    getY: (y: number) => number;
}

// interface GetXnY{
//     getX: (X:number) => number;
//     getY: (y:string) => number;
// }

// 프로퍼티 오버로딩 불가. 

interface GetXnY2 {
    getX(x: number) : number;
    getY(x: number) : number;
}

interface GetXnY2 {
    getX(x: number) : number;
    getY(x: string) : number;
}

// 메서드는 가능하다. 

const testMethod: GetXnY2 = {
    getX(x) {
        return x;
    },
    getY(y) {
        return 1;
    }
} 