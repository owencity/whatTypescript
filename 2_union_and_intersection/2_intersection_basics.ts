/* 
    intersection 

    union 은 OR 의 개념
    AND의 개념
*/

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '0102223344',
    address: '서울시'
};

// never 타입 -> 절대로 존재할수가 없는 상황 , number , string 이 공존하는 상황
// 