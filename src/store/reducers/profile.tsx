import { AnyAction } from 'redux';
import { ProfileState, LOGIN_TYPES } from '@/typings/state'
const initialState: ProfileState = {
    loginState: LOGIN_TYPES.UN_VALIDATA,
    user: null,
    error: null

}
//传入的状态是ProfileState,然后返回的状态也是ProfileState
export default function (state: ProfileState = initialState, action: AnyAction): ProfileState {
    return state;
}