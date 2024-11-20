/* 
    Statement and Expression
*/


// statement (문장)
function addTwoNumbers(x:number, y:number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number , y: number) => {
    return x + y;
}


/*
    Statement
*/

function add(x: number, y:number) : number {
    return x + y;
}


/* 
 Expression
*/

type CalculType = (x: number , y: number) => number;

const add2 : CalculType = function(x, y) {
    return x + y;
}
