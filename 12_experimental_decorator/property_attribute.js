/* 
    Property Attribute
    
    1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
    2) 액세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티(예 getter 와 setter)
*/

const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); // 클래스에 직접적으로 붙어있는 것 -> 스태틱
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year')); // 클래스에 직접적으로 붙어있는 것 -> 스태틱

/* 
    1) value = 실제 프로퍼티의 값 
    2) writable - 값을 수정할 수 있는 지 여부, false로 설정하면 프로퍼티 값을 수정 할수 없다.
    3) enumerable - 열거가 가능한지 여부이다.  for ... in 룹 등을 사용 할 수 있으면 true를 반환한다.
    4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
        단, writable 이 true인 경우 값 변경과 writable을 변경하는건 가능하다. 
*/
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin));


const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear - age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));


yuJin2['height'] = 172;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperties(yuJin2, 'height', {
    writable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));


console.log('--------------------------')
yuJin2.height = 172;
console.log(yuJin2);

/* 
    Enumerable
    열거를 할수있는지 알려주는 기능
*/

console.log(Object.keys(yuJin2));
for(let key in yuJin2) {
    console.log(key);
}

Object.defineProperties(yuJin2, 'name' , {
    enumerable: false,
});

for(let key in yuJin2) {
    console.log(key);
}

/* 
    Configurable
*/

Object.defineProperties(yuJin2, 'height', {
    configurable: false,
});

Object.defineProperties(yuJin2, 'height', {
    enumerable: false,
});

/* 
    더 견고하고 유지보수 가능한 코드를 작성하는데 유용
    프로퍼티 수정 제한 : writable false => 특정값 변경 할수 없게함(예: 상수값이나 설정 값을 실수로 변경하지 않도록 함)
    프로퍼티 가시성 제한 : enumerable false => for..in 루프나 object.key()에서 해당 프로퍼티 보이지 않도록 않게 할수있음 (민감한 데이터 노출되지않게 할때 유용)
    속성 재구성 방지 : configurable false => 특정 프로퍼티가 다시 설정되거나 삭제되지 않도록 고정할수 있음 (이는 보안을 강화하거나, 중요한 값이 고정되도록 보장할 때 유용)

    객체 프로퍼티에 대한 직접접근 제한, 게터와 세터를 통한 접근을 관리 
    이는 캡슐화의 기본, 객체 데이터의 수정이 통제되는 방식

    예로 사용자 프로필을 관리하는 시스템에서는 age값을 birthdate를 통해 계산하여 직접 수정하지 못하도록 할수 있음
    이렇게 하면 나이 계산의 정확성을 유지하고, 실수나 비허가 변경을 방지할 수있음

    enumerable로 데이터 처리, 직렬화 및 전송 시 객체를 가볍게 유지할 수 있음
    DB에서 non-enumerable 설정하면 내부 ID나 플래그처럼 민감한 데이터가 프론트엔드로 전송되지 않도록 할수 있음

*/