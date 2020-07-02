import React,{PropsWithChildren} from 'react'
import HomeHeader from './conponents/HomeHeader/index'
import './index.less';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux';
import { CombinedState } from '@/typings/state'
import {HomeState} from '@/typings/state';
import mapDispatchToProps from '@/store/actions/home';
type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>;

function Home(props: Props) {
    return (
        //把当前的状态和方法通过redux里面进行收集传进组件里面去了
        <HomeHeader 
        currentCategory = {props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
        />
    )
}
const mapStateToProps = (state:CombinedState):HomeState=>state.home;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);