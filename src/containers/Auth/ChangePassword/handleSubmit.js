import {userAxios} from '../../../axios-pbrn'; //
export default function handleSubmit(parentprops,allValues,setError) {
    return userAxios
        .post('/auth/passwordReset', allValues)
        .then(response => {
            parentprops
                .history
                .push("/");
        })
        .catch(error => {
            setError(error.response.data.error);
        })
}