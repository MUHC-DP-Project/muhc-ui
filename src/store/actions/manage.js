import * as actionTypes from './actionTypes';
import {userAxios} from '../../axios-pbrn';

export const managePageStart = () => {
    return {type: actionTypes.MANAGE_DATA_START};
};
export const manageDataSuccess = (newUserData, approvedUserData) => {
    return {type: actionTypes.MANAGE_DATA_SUCCESS, newUserData: newUserData, approvedUserData: approvedUserData}
}
export const manageDataFail = () => {
    return {type: actionTypes.MANAGE_DATA_FAIL}
}
export const userApprovalStart = () => {
    return {type: actionTypes.MANAGE_USER_APPROVAL_START}
}
export const userUnapprovalStart = () => {
    return {type: actionTypes.MANAGE_USER_UNAPPROVAL_START}
}
export const userApprovalSuccess = (newUserData, approvedUserData) => {
    return {type: actionTypes.MANAGE_USER_APPROVAL_SUCCESS, newUserData: newUserData, approvedUserData: approvedUserData}
}
export const userUnapprovalSuccess = (newUserData) => {
    return {type: actionTypes.MANAGE_USER_UNAPPROVAL_SUCCESS, newUserData: newUserData}
}
export const userApprovalFail = () => {
    return {type: actionTypes.MANAGE_USER_APPROVAL_FAIL}
}
export const userUnapprovalFail = () => {
    return {type: actionTypes.MANAGE_USER_UNAPPROVAL_FAIL}
}
export const manageFetchData = () => {
    return dispatch => {
        dispatch(managePageStart());
        userAxios
            .get('/users')
            .then(response => {
                const userData = response.data;
                //create 2 lists (approvedUsers and unaprovedUsers) 
                const [approvedUserList,
                    newUserList] = userData.reduce(([
                    approvedUser, newUser
                ], element) => (element.isApproved
                    ? [
                        [
                            ...approvedUser,
                            element
                        ],
                        newUser
                    ]
                    : [
                        approvedUser,
                        [
                            ...newUser,
                            element
                        ]
                    ]), [
                    [], []
                ]);
                dispatch(manageDataSuccess(newUserList, approvedUserList));
            })
            .catch(error => {
                dispatch(manageDataFail(actionTypes.MANAGE_DATA_FAIL));
            });

    }
}

export const approveUser = (userId, newUserData, approvedUserData) => {
    return dispatch => {
        dispatch(userApprovalStart());
        userAxios
            .get(`/auth/localApproveUser/${userId}`)
            .then(response => {               
                const tmpNewUserData = [...newUserData];
                const tmpApprovedUserData = [...approvedUserData];
                const userObject = tmpNewUserData.find(element => element._id === userId);
                dispatch(userApprovalSuccess(tmpNewUserData.filter(element => element._id !== userId), tmpApprovedUserData.concat(userObject)));
            })
            .catch(error => {
                dispatch(userApprovalFail());
            })
    }
}
export const unapproveUser = (userId,newUserData) => {
    return dispatch => {
        dispatch(userUnapprovalStart());
        userAxios
            .delete(`/users/${userId}`)
            .then(response => {
                const tmpNewUserData=[...newUserData];
                dispatch(userUnapprovalSuccess(tmpNewUserData.filter(element => element._id !== userId)))
            })
            .catch(error => {
                dispatch(userUnapprovalFail());
            })
    }
}