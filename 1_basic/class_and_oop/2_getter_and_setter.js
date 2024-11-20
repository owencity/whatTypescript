/* 
    Getter and Setter
*/

class IdolModel{
    #name;
    year;
    // #-> es7 엔진에서의 프리이빗 필드로 선언 
    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    /* 
        1. 데이터를 가공해 새로운 데이터를 반환
        2. private 한 값을 반환할 때
    */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    set name(name) {
        this.name = name;
    }
    // private로 선언할경우 직접 엑세스 불가하여 set같은것을 사용하여 접근
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear)

yuJin.name = '장원영';
console.log(yuJin); 