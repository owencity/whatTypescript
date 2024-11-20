/* 
    Nested Object
*/

type NestedPerson = {
    identity: {
        name:string;
        age: number;
    },
    nationality: string;
}

// const codefactory: NestedPerson = {
//     identity:{
//         age: 32,
//     },
// nationality: '한국인',
// }

type TPerson = {
    identity: TPersonIdenttiy,
    nationality: string;
}

type TPersonIdenttiy = {
    name: string;
    age:  number;
}

const iu: TPerson = {
    identity:{
        name:'아이유',
        age: 32,
    },
    nationality: '한국인',
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string
}

interface IPersonIdentity {
    name: string;
    age: number;
}

const yuJin: IPerson = {
    identity: {
        name: '안유진',
        age: 22,
    },
    nationality: '한국인',
}



