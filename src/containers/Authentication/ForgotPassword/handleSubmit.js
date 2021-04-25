import {userAxios} from '../../../axios-pbrn';
import {reset} from 'redux-form';
export default function handleSubmit(parentprops, formValues, setError) {
    userAxios
        .post('/auth/forgotPassword', formValues)
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