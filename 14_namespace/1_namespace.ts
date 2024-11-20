// 지금은 사라진 namespace 레거시 프로젝트에서 혹시나해서 사용할수 있음


// 독립된 공간, 
namespace Home {
    class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


}

namespace Post {
    class User {
        email: string;
        name: string;
    
        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }
}



// 관련된걸 묶어주는것 -> 모듈 , 

namespace Comment {
    const name = 'comment';

    namespace Detail {
        const page = 'detail';

        console.log(name);
        console.log(page);
    }

    console.log('---------');
    console.log(name);
}