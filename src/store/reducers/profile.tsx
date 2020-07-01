import {AnyAction} from 'redux';
export interface ProfileState {

}
const initialState:ProfileState = {

}
//传入的状态是ProfileState,然后返回的状态也是ProfileState
export default function (state:ProfileState = initialState,action:AnyAction):ProfileState {
    return state;
}