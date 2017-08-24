import {
    INCREMENT,
    DECREMENT
} from '../actions/counter';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const ACTION_HANDLERS = {
  [`${INCREMENT}_REQUEST`]: (state, action) => {
    return Object.assign({}, state, { isIncrementing: true });
  },
  [`${INCREMENT}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, { count: ++state.count, isIncrementing: false });
  },
  [`${INCREMENT}_FAILURE`]: (state, action) => {
    return Object.assign({}, state, { isIncrementing: false });
  },
  [`${DECREMENT}_REQUEST`]: (state, action) => {
    return Object.assign({}, state, { isDecrementing: true });
  },
  [`${DECREMENT}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, { count: --state.count, isDecrementing: false });
  },
  [`${DECREMENT}_FAILURE`]: (state, action) => {
    return Object.assign({}, state, { isDecrementing: false });
  }
};

export const counterReducer = function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};

export default counterReducer;
