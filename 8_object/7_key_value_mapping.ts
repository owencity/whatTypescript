/* 
    Key Value Mapping
*/

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State | boolean;
    paginateUsers : State | undefined
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers : State | undefined
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser:
    // paginateUsers: 
    // banUser: 
}


// type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser ' | 'paginateUsers'>; 추후 복습할떄 다시보기

type OmitUserApitStatus = Omit<GlobalApiStatus, 'getPosts'>;

/* 
    key of
*/
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'banUser';

type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus] : GlobalApiStatus[k];
}

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>] : GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    date: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus;