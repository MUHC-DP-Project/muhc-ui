import {userAxios,projectAxios} from '../../axios-pbrn';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {type: actionTypes.AUTH_START};
};

export const authSuccess = (token, user) => {
    return {type: actionTypes.AUTH_SUCCESS, tokenId: token, userId: user};
};

export const authFail = (error) => {
    return {type: actionTypes.AUTH_FAIL, error: error};
};
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isApproved');
    localStorage.removeItem('isEmailVerified');
    localStorage.removeItem('email');
    localStorage.removeItem('userRole');
    return {type: actionTypes.AUTH_LOGOUT};
};

export const auth = (authData, redirect) => {
    return dispatch => {
        dispatch(authStart());
        userAxios
            .post('/auth/signIn', authData)
            .then(response => {
                console.log(response);
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('userId', response.data.user._id);
                localStorage.setItem('isApproved', response.data.user.isApproved);
                localStorage.setItem('isEmailVerified', response.data.user.isEmailVerified);
                localStorage.setItem('email',response.data.user.email);
                localStorage.setItem('userRole',response.data.user.userRole);
                dispatch(authSuccess(response.data.token, response.data.user._id));
                console.log("combination", response.data.user.isApproved && response.data.user.isEmailVerified);
                response.data.user.isApproved && response.data.user.isEmailVerified
                    ? redirect.replace('/')
                    : redirect.replace('/postsignin');
            })
            .catch(err => {
                let error_msg='';
                switch (err.response.data.status) {
                    case 422:
                        error_msg="Missing parameters"
                        break;
                    case 500:
                        error_msg="Email or Password are invalid"
                        break;
                    default:
                        break;
                }
                dispatch(authFail(error_msg));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {type: actionTypes.SET_AUTH_REDIRECT_PATH, path: path};
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));

        }
    };
};