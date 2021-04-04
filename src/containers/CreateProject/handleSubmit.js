import {projectAxios,userAxios} from '../../axios-pbrn'; 
import {reset} from 'redux-form'


function HandleMultiTextRadio(jsonObject,key){
let tmpJsonObject={...jsonObject};
let array=tmpJsonObject[key];
array.forEach(element => {
    element.text=tmpJsonObject[key+'_text_'+element.select];  
    delete tmpJsonObject[key+'_text_'+element.select];  
    delete tmpJsonObject[key+'_radio_'+element.select];
    delete element.id;
    if(key==="intendedNonMcgillLocation" || key==="researchAndMethodology"){
        delete element.radio;
    }
});
delete tmpJsonObject[key+'_select']
return tmpJsonObject;
}

function handleMilestones(jsonObject){
    let tmpJsonObject={...jsonObject};
    const anticipatedMilestones=["projectConception","projectDesigned","fundingSoughtIgnoredConsidered","ethicsApproval","recruitment","dataCollection","dataAnalysis","knowledgeTranslationDissemination"];
    anticipatedMilestones.map(element=>{
        tmpJsonObject[element]={
            estimatedDate:tmpJsonObject[element+'Date'],
            projectStage:tmpJsonObject[element+'Radio']
        }
        delete tmpJsonObject[element+'Date'];
        delete tmpJsonObject[element+'Radio'];
    })
    return tmpJsonObject;
}

export default function handleSubmit(parentprops,allValues) {
    const json_object=allValues;
    let final_json_object = {
        ...json_object
    }
    final_json_object=HandleMultiTextRadio(final_json_object,"intendedMcgillLocation");  
    final_json_object=HandleMultiTextRadio(final_json_object,"intendedNonMcgillLocation"); 
    final_json_object=HandleMultiTextRadio(final_json_object,"researchAndMethodology"); 
    final_json_object=handleMilestones(final_json_object);
    if(final_json_object.projectFund=== 'Project has not been fund' && final_json_object.projectSought==='Funding will not be sought'){
        final_json_object.agencyName='Empty';
    }
    if(final_json_object.studyIRBREBSelect==="Exempt"){
        final_json_object.studyIRBREBText='N/A';
    }
    delete final_json_object.study_participants_text_field;
    delete final_json_object.keywords_text_field;
    console.log("Form submited ",final_json_object);

    return projectAxios
        .post('/projects', final_json_object)
        .then(response => {
            const userEmail=localStorage.getItem('email');
            const bodyRequest={
                PIListOfProjects:final_json_object.PIListOfProjects,
                CoIListOfProjects:final_json_object.CoIListOfProjects,
                ColListOfProjects:final_json_object.ColListOfProjects
            }
            console.log('bodyqurest',bodyRequest);
            console.log('response',response.data);
            const projectId=response.data._id;
            userAxios.
            put('/users/connectToProjects/'+projectId+'/'+userEmail,bodyRequest)
            .then(response=>{
                parentprops.dispatch(reset('createProject'));
                parentprops.onSuccess("Form Submited");
                parentprops
                    .history
                    .replace("/");
            })
            .catch(error => {
                console.log(error.response);
                parentprops.onError("Failed to submit the form");
            })           
        })
        .catch(error => {
            console.log(error.response);
            parentprops.onError("Failed to submit the form");
        })
}