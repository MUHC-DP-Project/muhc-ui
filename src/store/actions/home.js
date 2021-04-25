import {userAxios, projectAxios} from '../../axios-pbrn';

import * as actionTypes from './actionTypes';

export const homePageStart = () => {
    return {type: actionTypes.HOME_DATA_START};
};
export const homeDataSuccess = (type, data) => {
    return {type: type, data: data}
}
export const homeDataFail = (type,data) => {
    return {type: type, data: data}
}

export const fetchData = () => {
    return dispatch => {
        dispatch(homePageStart());
        projectAxios
            .get('/projects')
            .then(response => {
                const userId = localStorage.getItem('userId');
                const listOfPR=response.data;
                dispatch(homeDataSuccess(actionTypes.HOME_PROJECT_DATA_SUCCESS, response.data));
                userAxios
                    .get(`/users/${userId}`)
                    .then(response => {
                        const myUser = response.data;
                        let finalList = [];
                        let allInvolvedProjectId = [];
                        allInvolvedProjectId.push(...myUser.CoIListOfProjects)
                        allInvolvedProjectId.push(...myUser.ColListOfProjects);
                        allInvolvedProjectId.push(...myUser.PIListOfProjects);
                        allInvolvedProjectId.push(...myUser.userListOfProjects);
                        listOfPR.forEach(element => {
                            if (allInvolvedProjectId.includes(element._id)) {
                                finalList.push(element);
                            }
                        });
                        dispatch(homeDataSuccess(actionTypes.HOME_MYPROJECT_DATA_SUCCESS, finalList));
                    })
                    .catch(error => {
                        dispatch(homeDataFail(actionTypes.HOME_MYPROJECT_DATA_FAIL,[]));
                    });
            })
            .catch(error => {
                dispatch(homeDataFail(actionTypes.HOME_PROJECT_DATA_FAIL,[]));
                dispatch(homeDataFail(actionTypes.HOME_MYPROJECT_DATA_FAIL,[]));
            });
        userAxios
            .get('/users')
            .then(response => {
                dispatch(homeDataSuccess(actionTypes.HOME_USER_DATA_SUCCESS, response.data));
            })
            .catch(error => {
                dispatch(homeDataFail(actionTypes.HOME_USER_DATA_FAIL,[]));
            });
    }
};
