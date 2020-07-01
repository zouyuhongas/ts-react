import {AnyAction} from 'redux';
export interface HomeState {

}
const initialState:HomeState = {

}
//传入的状态是HomeState,然后返回的状态也是HomeState
export default function (state:HomeState = initialState,action:AnyAction):HomeState {
    return state;
}