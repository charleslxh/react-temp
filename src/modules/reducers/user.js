import {
    LOG_IN,
    LOG_OUT
} from '../actions/user';

const ACTION_HANDLERS = {
    [LOG_IN]: (state, action) => action.user,
    [LOG_OUT]: (state, action) => null
};

export const userReducer = function (state = null, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
};

export default userReducer;
