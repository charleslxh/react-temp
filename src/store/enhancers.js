// ======================================================
// 配置 Store 增强器
// ======================================================
const enhancers = []

if (process.env.NODE_ENV !== 'production') {
    /** Redux DevTools **/
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

export default enhancers
