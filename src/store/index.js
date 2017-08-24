import { applyMiddleware, compose, createStore } from 'redux'

import { makeRootReducer } from '../modules/reducers'
import enhancers from './enhancers';
import middlewares from './middlewares'

// ======================================================
// 实例化 Store
// ======================================================
export const store = createStore(
    makeRootReducer(),
    window.___INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
    compose(
        applyMiddleware(...middlewares),
        ...enhancers
    )
);

export default store;
