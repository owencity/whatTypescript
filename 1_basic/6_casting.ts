/* 
    Casting

    TS에서 Casting을 하면 JS에서는 적용이 안된다. 
    Casting은 JS에서 존재하지 않는 개념, 실제구동하는 코드에서 아무런 의미를 갖지 않는다.
*/

let codefactory = 'code factory';
let testNumber = 3;

console.log(codefactory.toUpperCase());

let sampleNumber: any = 5;
console.log(sampleNumber.toUpperCase()); // VS CODE는 부족해서 그냥 toUpperCase를 해줌

let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));
// any를 남발하면 타입스크립트를 쓰는 의미가 없어진다. 