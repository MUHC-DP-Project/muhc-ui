
import { PublicOutlined } from '@material-ui/icons';
import {v4 as uuidv4} from 'uuid';

function HandleMultiTextRadio(jsonObject,key){
    let tmpJsonObject={...jsonObject};
    let array=tmpJsonObject[key];
    array.forEach(element => {
        tmpJsonObject[key+'_text_'+element.select]=element.text;  
        if(key==="intendedMcgillLocation"){
            tmpJsonObject[key+'_radio_'+element.select]=element.radio;
        }
        tmpJsonObject[key+'_select']=element.select;
    });    
    return tmpJsonObject;
    }

function handleMilestones(jsonObject){
    let tmpJsonObject={...jsonObject};
    const anticipatedMilestones=["projectConception","projectDesigned","fundingSoughtIgnoredConsidered","ethicsApproval","recruitment","dataCollection","dataAnalysis","knowledgeTranslationDissemination"];
    
    anticipatedMilestones.map(element=>{
        const copiedElement={...tmpJsonObject[element]}
        tmpJsonObject[element+'Date']=copiedElement.estimatedDate;
        tmpJsonObject[element+'Radio']=copiedElement.projectStage;
        delete tmpJsonObject[element];
    })
    return tmpJsonObject;
}
function formMapper(json_object){
    let final_json_object = {
        ...json_object
    }
    delete final_json_object['_id'];
    delete final_json_object['__v'];
    delete final_json_object['updatedAt'];
    delete final_json_object['createdAt'];
    delete final_json_object['__proto__'];
    final_json_object=HandleMultiTextRadio(final_json_object,"intendedMcgillLocation");  
    final_json_object=HandleMultiTextRadio(final_json_object,"intendedNonMcgillLocation"); 
    final_json_object=HandleMultiTextRadio(final_json_object,"researchAndMethodology"); 
    final_json_object=handleMilestones(final_json_object);
    return final_json_object;
}

export default formMapper;