
import { createStore, applyMiddleware, AnyAction} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router';
import history from '@/history';
let store = applyMiddleware(routerMiddleware(history),promise,logger,thunk)(createStore)(rootReducer)
export default store;