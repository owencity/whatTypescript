/* 
    오버로딩

    파라미터를 
    1)하나를 받거나
    2)세개를 받는 함수
*/

function stringOrStrings(member: string): string;
function stringOrStrings(member: string, member2: string, member3: string): string;
// function stringOrStrings(member: string):number; // 이 오버로드 시그니처는 해당 구현 시그니처와 호환되지 않습니다.

/* 
    만약에 하나의 파라미터를 입력받는다면 하나의 스트링으로 입력받는다
    만약 세개 파라미터를 받으면 각각의 값으로 파라미터값으로 입력한다.
*/
function stringOrStrings(MemberOrMembers: string, member2?: string, member3?:string) {
    if(member2 && member3) {
        return `아이브: ${MemberOrMembers}, ${member2}, ${member3}`;
    } else {
        return `아이브: ${MemberOrMembers}`;
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이'));