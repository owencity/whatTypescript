/* 
    Generic in interface
*/

interface Cache<T> {
    date: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    date: ['date1', 'date2'],
    lastUpdate: new Date(),
}

// const cach2: Cache<number> = {
//     date: [123, 456],
//     lastUpdate: new Date(),
// }

interface DefaultGeneric<T = string> {
    data:T[];
}

// const cache3: DefaultGeneric = {
//     data: ['123' , '456'],
// }