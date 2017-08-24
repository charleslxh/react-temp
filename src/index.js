import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import registerServiceWorker from 'UTILS/registerServiceWorker';

import App from 'COMPONENTS/App';
import './index.css';

import store from 'STORE'
import history from 'STORE/history'

console.debug('Environment => ', process.env.NODE_ENV);

/**
 * 检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题
 * 诸如 PureComponent / shouldComponentUpdate / Immutable.js 等
 * 请自行查阅相关资料
 */
if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-unused-vars,react/no-deprecated
    let createClass = React.createClass;
    Object.defineProperty(React, 'createClass', {
        set: (nextCreateClass) => {
            createClass = nextCreateClass;
        },
    });
    // eslint-disable-next-line global-require
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);

    // devTools
    if (window.devToolsExtension) {
        window.devToolsExtension.open()
    }
}

// 动态引入 Promise Polyfills
if (!window.Promise) window.Promise = require('promise');

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);

registerServiceWorker();
