/*  
    Loopholes of Any
*/

let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase(); // any 남발 x 마음대로 캐스팅 x

const multiplyTwo = (x: number , y: number ) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

let iu:any = {name: '아이유', age: 30};
// any는 자동완성을 하지못함 , object도 any 로 캐스팅하면안된다.

const callbackRunner = (x: number , y:number ,callback:any ) => {
    return callback(x, y);
}

const callback = (x:number,y:number) => {
    return x * y;
}

console.log(callbackRunner(5, 4, callback));
