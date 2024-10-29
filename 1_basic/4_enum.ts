/* 
    Enum
*/


/* 
    API 요청을 한다 
    상태는 4가지 상태 

    DONE -요청완료
    ERROR - 에러
    LOADING - 로딩
    INITIAL - 초기 상태
*/

function runWork() {
    let state = 'INITIAL'

    try {
         state = 'LOADING';
         // 작업을 한다
         state = 'DONE'
    } catch(E) {
        state = 'ERROR'
    } finally {
        return state;
    }
}

console.log(runWork() === 'DONE');

enum State {  // 0부터 숫자가 부여된다. 스트링값 넣어주면 해당 스트링값을 반환
    DONE ,
    LOADING,
    INITIAL,
    ERROR,
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업을 한다.
        state = State.DONE;
    } catch(e) {
        state = State.ERROR
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3())