import {userAxios} from '../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues,setError) {
    return userAxios
        .post('/auth/forgotPassword', allValues)
        .then(response => {
            parentprops.dispatch(reset('forgotPassword'));
            parentprops
                .history
                .push("/signIn");
        })
        .catch(error => {
            setError(error.response.data.message);
        })
}