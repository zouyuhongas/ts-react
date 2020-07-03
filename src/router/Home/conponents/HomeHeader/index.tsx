import React, { useState, CSSProperties } from 'react';
import './index.less'
let logo = require('../../../../assets/images/zfkelogo.png');
import classnames from 'classnames'
import { Transition } from 'react-transition-group'
import { OmitProps } from 'antd/lib/transfer/ListBody';
const duration = 1000;
const defaultStyle: CSSProperties = {
    transition: `all ${duration} ease-in-out`,
    opacity: 0,
    display: 'none'
}
const transitionStyle = {
    entering: { opacity: 0, display: 'none' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'none' },
    exited: { opacity: 0, display: 'none' },
    unmounted: { opacity: 0, display: 'none' }
}
interface Props {
    currentCategory: string;//当前的分类会储存在redux的仓库中
    setCurrentCategory: (currentCategory: string) => any;
}
function HomeHeader(props: Props) {
    let [isMenuVisible, setIsMenuVisible] = useState(false);
    //React.MouseEvent代表的是事件的名字,HTMLUListElement代表的是真实dom相当于rurl的功能
    const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        let target: HTMLUListElement = event.target as HTMLUListElement;
        let category = target.dataset.category;
        props.setCurrentCategory(category);
        setIsMenuVisible(false)
    }
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo.default} alt="" />
                <i onClick={() => setIsMenuVisible(!isMenuVisible)}>1</i>
            </div>
            <Transition in={isMenuVisible} timeout={duration}>
                {
                    (state) => (
                        <ul
                            className="category"
                            onClick={setCurrentCategory}
                            style={{
                                ...defaultStyle,
                                ...transitionStyle[state]
                            }}
                        >
                            <li data-category="all" className={classnames({ active: props.currentCategory === "all" })}>全部课程</li>
                            <li data-category="react" className={classnames({ active: props.currentCategory === "react" })}>react课程</li>
                            <li data-category="vue" className={classnames({ active: props.currentCategory === "vue" })}>vue课程</li>
                        </ul>
                    )
                }
            </Transition>
        </header>
    )
}
export default HomeHeader;
