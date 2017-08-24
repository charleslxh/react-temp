// ======================================================
// 配置中间件
// ======================================================
import thunk from 'redux-thunk';
import { middleware } from './history';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [thunk, middleware];

if (process.env.NODE_ENV !== 'production') {
    /** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger());
}

// @see https://github.com/pburtchaell/redux-promise-middleware
middlewares.push(promiseMiddleware({
  promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
}));

// 请求进度条
middlewares.push(loadingBarMiddleware({
  promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
}));

export default middlewares;
