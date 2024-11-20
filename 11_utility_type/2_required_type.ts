/* 
    Required Type
    제네릭의 모든 타입이 필수되게 만드는 타입
*/

interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country : '한국'
}