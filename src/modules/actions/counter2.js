import { createAction } from 'redux-actions';

// ================================
// Action Type
// ================================
export const INCREMENT2 = 'INCREMENT2';
export const DECREMENT2 = 'DECREMENT2';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// ================================
// Action Creator
// ================================
const increment = createAction(INCREMENT2,
  (count = 1) => ({ count }), // payload
  (count = 1) => ({ message: `${ count }` }) // meta
);

const incrementAsync = createAction(INCREMENT2,
  async (count = 1) => {
    await delay(3000);
    return { count }
  }, // payload
  (count = 1) => ({ message: `Asynced ${ count }` })// meta
)

const decrement = createAction(DECREMENT2,
  (count = 1) => ({ count }), // payload
  (count = 1) => ({ message: `${ count }` }) // meta
);

const decrementAsync = createAction(DECREMENT2,
  async (count = 1) => {
    await delay(3000);
    return { count }
  }, // payload
  (count = 1) => ({ message: `Asynced ${ count }` }) // meta
)

// ================================
// 导出所有 Actions Creator
// ================================
export default {
    increment, incrementAsync, decrement, decrementAsync
}
