import userService from '../../services/userService'

// ================================
// Action Type
// ================================
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// ================================
// Action Creator
// ================================
const loginDone = (userData) => ({
    type: LOG_IN,
    payload: userData
});

const login = (formData) => {
    return dispatch => {
        userService
            .login(formData)
            .then(
                re => dispatch(loginDone(re))
            )
    }
};

const checkLogin = () => {
    return dispatch => {
        userService
            .checkLogin()
            .then((re) => {
                if (!re) return;
                dispatch(loginDone(re))
            })
    }
};

const logout = () => {
    return dispatch => {
        userService
            .logout()
            .then(() =>
                dispatch({
                    type: LOG_OUT
                })
            )
    }
};

// ================================
// 导出所有 Actions Creator
// ================================
export default {
    login, checkLogin, logout
}
