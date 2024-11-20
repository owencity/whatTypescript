/* 
    Abstract Class
    자바스크립트는 없는 개념 , 키워드로 제공은 x , 타입스크립트에만 있음
*/

abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123); 

class Product extends ModelWithId {

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return '소리질러~';
    }
}