import { handleActions } from 'redux-actions';

import {
    INCREMENT2,
    DECREMENT2
} from '../actions/counter2';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export const counter2Reducer = handleActions({
  [INCREMENT2]: (state, action) => {
    return Object.assign({}, state, { count: state.count + action.payload.count, isIncrementing: false });
  },
  [`${INCREMENT2}_REQUEST`]: (state, action) => {
    return Object.assign({}, state, { isIncrementing: true });
  },
  [`${INCREMENT2}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, { count: state.count + action.payload.count, isIncrementing: false });
  },
  [`${INCREMENT2}_FAILURE`]: (state, action) => {
    return Object.assign({}, state, { isIncrementing: false });
  },
  [DECREMENT2]: (state, action) => {
    return Object.assign({}, state, { count: state.count - action.payload.count, isIncrementing: false });
  },
  [`${DECREMENT2}_REQUEST`]: (state, action) => {
    return Object.assign({}, state, { isDecrementing: true });
  },
  [`${DECREMENT2}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, { count: state.count - action.payload.count, isDecrementing: false });
  },
  [`${DECREMENT2}_FAILURE`]: (state, action) => {
    return Object.assign({}, state, { isDecrementing: false });
  }
}, initialState);

export default counter2Reducer
