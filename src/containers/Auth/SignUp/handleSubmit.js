import {userAxios} from '../../../axios-pbrn'; //
import {reset} from 'redux-form';
export default function handleSubmit(parentprops,allValues,setError) {
    return userAxios
        .post('/auth/signUp', allValues)
        .then(response => {
            parentprops.dispatch(reset('signUp'));
            parentprops
                .history
                .push("/signIn");
        })
        .catch(error => {
            setError(error.response.data.message)
        })
}