/* 
    Readonly Type
    타입스크립트에만 존재함.
*/

interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냐옹이',
    age: 8
};

nyaong.name = '코드팩토리';

const bori: Readonly<Cat> = {
    name: '보리',
    age: 7,
}

// bori.name = '아이유';

Object.freeze(bori); // 자바스크립트에서의 readonly 문법