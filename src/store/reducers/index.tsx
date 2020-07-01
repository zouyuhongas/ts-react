import { combineReducers, ReducersMapObject, AnyAction } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import home from './Home';
import mine from './Mine';
import profile from './profile';
import history from '@/history'
import { CombinedState } from '@/typings/state';
let reducers: ReducersMapObject<CombinedState, AnyAction> = {
    home,
    mine,
    profile,
    router: connectRouter(history)
}

const rootReducer = combineReducers(reducers);
//迭代每一个reducers里面的每一个类型,把当前每个类型返回到returnType里面
export type RootState<CombinedState, AnyAction> = {
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}
export default rootReducer;