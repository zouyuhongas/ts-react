import { AnyAction } from 'redux';
import { HomeState } from '@/typings/state'
import * as actionTypes from '@/store/action-types'
const initialState: HomeState = {
    currentCategory:'all'
}
//传入的状态是HomeState,然后返回的状态也是HomeState
export default function (state: HomeState = initialState, action: AnyAction): HomeState {
   switch(action.type){
       case actionTypes.SET_CURRENT_CATEGORY :
           return {...state,currentCategory:action.payload}
           default:
            return state;
   }
    
}