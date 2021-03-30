import {userAxios} from '../../axios-pbrn'; //
import {reset} from 'redux-form'
export default function handleSubmit(parentprops,allValues) {
    const json_object=allValues;
    const copied_json_object = {
        ...json_object
    }

    copied_json_object.principalUniversityAffiliation = copied_json_object.principalUniversityAffiliationSelect === "Other"
        ? copied_json_object.principalUniversityAffiliationTextfield
        : copied_json_object.principalUniversityAffiliationSelect;
    delete copied_json_object.principalUniversityAffiliationTextfield;
    delete copied_json_object.principalUniversityAffiliationSelect;

    copied_json_object.principalClinic = copied_json_object.principalClinicSelect === "Other"
        ? copied_json_object.principalClinicTextfield
        : copied_json_object.principalClinicSelect;
    delete copied_json_object.principalClinicTextfield;
    delete copied_json_object.principalClinicSelect;

    copied_json_object.secondaryClinic = copied_json_object.secondaryClinicSelect === "Other"
        ? copied_json_object.secondaryClinicTextfield
        : copied_json_object.secondaryClinicSelect;
    delete copied_json_object.secondaryClinicTextfield;
    delete copied_json_object.secondaryClinicSelect;

    copied_json_object.professionalOccupation = copied_json_object.professionalOccupationSelect === "Other"
        ? copied_json_object.profesionalOccupationTextfield
        : copied_json_object.professionalOccupationSelect;
    delete copied_json_object.profesionalOccupationTextfield;
    delete copied_json_object.professionalOccupationSelect;

    copied_json_object.role = copied_json_object.roleSelect === "Other"
        ? copied_json_object.roleTextfield
        : copied_json_object.roleSelect;
    delete copied_json_object.roleTextfield;
    delete copied_json_object.roleSelect;

    const userId=localStorage.getItem('userId');
    console.log(copied_json_object);
    return userAxios
        .put("/users/"+userId, copied_json_object)
        .then(response => {
            parentprops.dispatch(reset('signUp'));
            parentprops.onSuccess("Form Submited");
            parentprops
                .history
                .push("/");
        })
        .catch(error => {
            console.log("error ",error.response);
            parentprops.onError("Failed to submit the form");
        })
}