import {AnyAction} from 'redux';
import { MineState } from '@/typings/state'

const initialState:MineState = {

}
//传入的状态是MineState,然后返回的状态也是MineState
export default function (state:MineState = initialState,action:AnyAction):MineState {
    return state;
}