import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './type';

import AuthService from '../services/auth.service';

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const login = (username, password) => (disptach) => {
    return AuthService.login(username, password).then(
        (data) => {
            disptach({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            disptach({
                type: LOGIN_FAIL,
            });
            disptach({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
}