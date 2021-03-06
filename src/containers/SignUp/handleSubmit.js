import axios from '../../axios-pbrn'; //
import { useHistory } from "react-router-dom";
export default function handleSubmit(json_object) {
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


    axios
        .post('/users', copied_json_object)
        .then(response => {
            console.log("response:", response);
            let history = useHistory();
            history.push("/home");
        })
        .catch(error => {
            console.log('error: ', error.response)
        })
}