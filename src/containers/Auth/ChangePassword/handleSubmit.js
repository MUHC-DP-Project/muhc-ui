import {userAxios} from '../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues,setError) {
    return userAxios
        .post('/auth/passwordReset', allValues)
        .then(response => {
            console.log("response ",response);
            parentprops
                .history
                .push("/");
        })
        .catch(error => {
            setError(error.response.data.error);
            console.log("error ",error.response.data.error);
        })
}