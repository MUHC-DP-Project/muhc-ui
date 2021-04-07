import {userAxios} from '../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues,setError) {
    console.log("form signup, ",allValues);
    return userAxios
        .post('/auth/signUp', allValues)
        .then(response => {
            console.log("response ",response);
            parentprops.dispatch(reset('signUp'));
            parentprops
                .history
                .push("/signIn");
        })
        .catch(error => {
            setError(error.response.data.message)
        })
}