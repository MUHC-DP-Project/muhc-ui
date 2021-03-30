import {userAxios} from '../../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues) {
    console.log("form signin, ",allValues);
    return userAxios
        .post('/auth/signIn', allValues)
        .then(response => {
            console.log("response ",response);
            parentprops.dispatch(reset('signIn'));
            parentprops
                .history
                .push("/");//signIn
        })
        .catch(error => {
            console.log("error ",error.response);
        })
}