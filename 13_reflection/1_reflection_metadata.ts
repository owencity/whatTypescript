/* 
    Reflection metadata
*/

import 'reflect-metadata';

const iu = {
    name : '아이유',
    age: 32,
    nationality : 'korean',
}

console.log(iu);


/* 
    파라미터의 정의
    1) 메터데이터의 키
    2) 메터데이터 키에 저장할 값
    3) 메타데이터를 저장할 객체
    4) 메타데이터를 저장할 객체의 프로퍼티

    4번은 필수가 아니다.

    메타데이터가 무엇인가?
    - 데이터에 대한 데이터
    */
Reflect.defineMetadata('test-meta', 123, iu);

console.log(iu);

console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu));

/* 
    프로퍼티에 저장하기 
*/

Reflect.defineMetadata('object-meta', 999, iu, 'name');

console.log(Reflect.getMetadata('object-meta', iu, 'name'));

Reflect.deleteMetadata('object-meta', iu, 'name');

console.log(Reflect.hasMetadata('object-meta', iu, 'name'));
console.log(Reflect.getMetadataKeys(iu));

Reflect.defineMetadata('prototype-data', '프로토타입 메타에요!', Object.getPrototypeOf(iu));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));


