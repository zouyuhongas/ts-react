import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import { Icon } from 'antd';
import './index.less';
interface Props {

}
function Tabs(_props:Props){
    return(
        <footer>
            <NavLink exact to="/"><span>首页</span></NavLink>
            <NavLink to="/mine"><span>购物车</span></NavLink>
            <NavLink to="/profile"><span>个人中心</span></NavLink>
        </footer>
    )
}
export default Tabs;