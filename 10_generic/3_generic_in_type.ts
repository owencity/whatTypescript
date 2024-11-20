/* 
    Generic in Type
*/

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';

interface DoneState<T> {
    data: T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T = string> = DoneState<String> | LoadingState | ErrorState;

let state: State<String> = {
    data: ['123', '456'],
}

state = {
    requestedAt: new Date()
}

state = {error: 'error'};

let state2: State = {
    data: ['123', '456']
}