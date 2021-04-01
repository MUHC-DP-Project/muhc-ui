import {userAxios} from '../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues) {
    console.log("form signup, ",allValues);
    return userAxios
        .post('/auth/forgotPassword', allValues)
        .then(response => {
            console.log("response ",response);
            parentprops.dispatch(reset('forgotPassword'));
            parentprops
                .history
                .push("/signIn");
        })
        .catch(error => {
            console.log("error ",error.response);
        })
}