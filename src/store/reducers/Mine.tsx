import {AnyAction} from 'redux';
export interface MineState {

}
const initialState:MineState = {

}
//传入的状态是MineState,然后返回的状态也是MineState
export default function (state:MineState = initialState,action:AnyAction):MineState {
    return state;
}