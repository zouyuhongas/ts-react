import React from 'react';
import './index.less'
let logo = require('../../../../assets/images/zfkelogo.png')
interface Props{

}
function HomeHeader(_props: Props){
    return(
        <header className="home-header">
            <div className="logo-header">
                <img src={logo.default} alt=""/>
            </div>
        </header>
    )
}
export default HomeHeader;
