import { HomeState } from '@/store/reducers/Home';
import { MineState } from '@/store/reducers/Mine';
import { ProfileState } from '@/store/reducers/profile';
import { RouterState } from 'connected-react-router';
//这里是构建自己的状态然后把所有的状态都进行合并后在进行迭代派发
export interface CombinedState {
    home: HomeState;
    mine: MineState;
    profile: ProfileState;
    router: RouterState
}

