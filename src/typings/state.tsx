
import { RouterState } from 'connected-react-router';
//这里是构建自己的状态然后把所有的状态都进行合并后在进行迭代派发
export interface HomeState {
    currentCategory: string;
}
export interface MineState {

}
interface User {
    username: string,
    email: string,
    avatar: string
}
    //各种的登录状态信息
export enum LOGIN_TYPES {
    UN_VALIDATA = 'UN_VALIDATA',
    LOGINED = 'LOGINED',
    UN_LOGINED = 'UN_LOGINED'
}
export interface ProfileState {
    loginState:LOGIN_TYPES;
    user: User | null;
    error: string | null
}
export interface CombinedState {
    home: HomeState;
    mine: MineState;
    profile: ProfileState;
    router: RouterState
}

