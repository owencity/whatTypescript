/* 
 Class keyword
*/

class IdolModel {
    name = '안유진';
    year = 2003;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    // constructor 객체 초기화 위한 문법 , 클래스 인스턴스가 생성될 때 초기화 작업을 수행하는 특별한 메서드
    sayName() {
        return `안녕하세요 저는 안유진입니다.`
    }
    // 클래스 내의 함수 정의 -> 메서드 사용 
    // function 키워드 없이 이름과 괄호만으로 선언

}

// constructor - 생성자 ㅂ

const yuJin = new IdolModel('안유진');
// new 키워드 사용시 constructor 호출, 객체를 초기화 생성자에 전달된 매개변수를 통해 객체 안의 값을 재정의 
console.log(yuJin);