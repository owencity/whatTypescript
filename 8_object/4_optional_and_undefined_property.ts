/* 
    Optional and Undefined property
*/

interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined
    breed?: string;
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '머니핀',
}

const ori: Dog = {
    name:'오리',
    age: 3,
}

interface Cat {
    name: string;
    age: number;
    breed: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    breed: undefined,
}

// ? optional은 입력해도되는지 안되는지 여부를 따진다. 