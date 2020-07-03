import React, { PropsWithChildren } from 'react';
import { History } from 'history'
import './index.less';
type Props = PropsWithChildren<{
    history: History
}>
function Nav(props: Props) {
    return (
        <header className="nav-header">
            <i onClick={() => props.history.goBack()}>〈</i>
            {props.children}
        </header>
    )
}
export default Nav;