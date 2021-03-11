import {projectAxios} from '../../axios-pbrn'; //
import {reset} from 'redux-form'

function handleListOfUser(jsonObject,extension,key){//PI_
    const obj={...jsonObject};
    const fullNames=[];
    const firstNames=[];
    const lastNames=[];
    for(let Name in obj){
        if( Name.includes(extension+"fName_")){
            const id=Name.replace(extension+"fName_",'');
            firstNames.push({
                id:id,
                value:obj[Name]
            })
            delete obj[Name];
        }
        else if (Name.includes(extension+"lName_")){
            const id=Name.replace(extension+"lName_",'');
            lastNames.push({
                id:id,
                value:obj[Name]
            });
            delete obj[Name];
        }
    }

    firstNames.forEach(fn => {
        const lastName=lastNames.find(ln=>ln.id===fn.id);
        if(lastName!==undefined){
            fullNames.push(fn.value+' '+lastName.value)
        }
    });

    obj[key]=fullNames;
    return obj;
}

function HandleMultiTextRadio(jsonObject,key){
let tmpJsonObject={...jsonObject};
let array=tmpJsonObject[key];
array.forEach(element => {
    element.text=tmpJsonObject[key+'_text_'+element.select];
    delete tmpJsonObject[key+'_text_'+element.select];
    
});
delete tmpJsonObject[key+'_select']
return tmpJsonObject;
}
export default function handleSubmit(parentprops,allValues) {
    const json_object=allValues;
    let final_json_object = {
        ...json_object
    }

    final_json_object=handleListOfUser(final_json_object,"PI_",'PIListOfUsers');
    final_json_object=handleListOfUser(final_json_object,"CoI_",'CoIListOfUsers');
    final_json_object=handleListOfUser(final_json_object,"Col_",'ColListOfUsers');

    final_json_object=HandleMultiTextRadio(final_json_object,"intendedMcgillLocation");  
    final_json_object=HandleMultiTextRadio(final_json_object,"intendedNonMcgillLocation"); 
    final_json_object=HandleMultiTextRadio(final_json_object,"researchAndMethodology"); 

    if(final_json_object.projectFund=== 'Project has not been fund' && final_json_object.projectSought==='Funding will not be sought'){
        final_json_object.agencyName='Empty';
    }

    return projectAxios
        .post('/projects', final_json_object)
        .then(response => {
            parentprops.dispatch(reset('createProject'));
            parentprops.onSuccess("Form Submited");
            parentprops
                .history
                .push("/");
        })
        .catch(error => {
            parentprops.onError("Failed to submit the form");
        })
}