/* 
    Multi Dimension Array
*/

const num2DArr: number[][] = [
    [1,2,3],
    [4,5,6]
]

const str2DArr = [
    ['1','2','3'],
    ['4','5','6']
]

const strAndNumberArr : (number | string)[][] = [
    [1,'2',3],
    [4,'5',6]
]

const strArrOrNumberArr: string[][] | number[][] = [

]

// 실제작동하는 방식은 array 와 똑같다.

for(let arr of num2DArr) {
    for(let item of arr) {

    }
}