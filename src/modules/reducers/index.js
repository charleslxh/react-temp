import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import store from 'STORE';

import userReducer from 'REDUCERS/user';
import counterReducer from 'REDUCERS/counter';
import counter2Reducer from 'REDUCERS/counter2';

// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReducers = {
    router: routerReducer,
    user: userReducer,
    counter: counterReducer,
    counter2: counter2Reducer,
    loadingBar: loadingBarReducer
};

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {};

/**
 * @return {Function} rootReducer
 */
export const makeRootReducer = () => {
    return combineReducers({
        ...syncReducers,
        ...asyncReducers
    })
};

/**
 * 按需加载时，立即注入对应的 Reducer
 *
 * @param  {String}   key
 * @param  {Function} reducer
 */
export const injectReducer = (key, reducer) => {
    asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer())
};
