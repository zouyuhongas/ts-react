import React from 'react'
import reactDom from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './assets/style/common.less'
import Home from './router/Home';
import Mine from './router/Mine';
import Profile from './router/Profile';
import { ConnectedRouter } from "connected-react-router";
import history from '@/history'
reactDom.render(
 <Provider store={store}>
     <ConnectedRouter history={history}>
        <ConfigProvider locale={zh_CN}>
            <main className='main-container'>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/mine' exact component={Mine}></Route>
                    <Route path='profile' exact component={Profile}></Route>
                </Switch>
            </main>
        </ConfigProvider>
     </ConnectedRouter>
 </Provider>
,document.getElementById('root')
)