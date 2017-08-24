
// ================================
// Action Type
// ================================
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// ================================
// Action Creator
// ================================
const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      payload: new Promise((resolve, reject) => resolve())
    })
    .then(() => {
      dispatch({ type: INCREMENT });
    })
  }
}

const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      payload: new Promise((resolve, reject) => setTimeout(resolve, 3000))
    })
    .then(() => {
      dispatch({ type: INCREMENT });
    })
  }
}

const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      payload: new Promise((resolve, reject) => resolve())
    })
    .then(() => {
      dispatch({ type: DECREMENT });
    })
  }
}

const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      payload: new Promise((resolve, reject) => setTimeout(resolve, 3000))
    })
    .then(() => {
      dispatch({
        type: DECREMENT
      })
    })
  }
}

// ================================
// 导出所有 Actions Creator
// ================================
export default {
    increment, incrementAsync, decrement, decrementAsync
}
