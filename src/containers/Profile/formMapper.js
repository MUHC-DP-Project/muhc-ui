
const principalUniversityAffiliationArray=[
         'McGill University',
         'University de Laval',
         'University de Montreal',
         'University de Sherbrooke',
         'Not applicable'
]
const clinicsArray=[
 'Herzl Family Practice Centre', 
     "St Mary's Family Medicine Centre", 
     'CLSC Côtes des Neiges', 
     'Gatineau U-FMG.', 
     'Jardins Roussillon U-FMG', 
     "Vallée de l'Or U-FMG", 
     'CLSC Metro', 
     'Queen Elizabeth U-FMG', 
     'CLSC Parc-Extension', 
     'Santé Kildare GMF', 
     'Other McGill University', 
     'University de Laval', 
     'University de Montreal', 
     'University de Sherbrooke', 
     'Not applicable'   
]
const professionalCategoryArray=[
     "Allied Health professional",
     "Administrative staff",
     "Technical staff",
     "Doctor(resident or physician)",
     "Nurse",
     "Manager"
]
const clinicRoleArray=['*Doctor',
    'Staff Physician',
    'Non-Staff Physician',
    '*Trainee',
    'Resident R1',
    'Resident R2',
    'Nursing student in stage/placement',
    'Allied Health student in stage/placement',
    '*Nurse',
    'Registered Nurse (RN)',
    'Nursing Assistant/Auxiliary Nurse',
    'Nurse Practitioner',
    'Assistant Head Nurse',
    'Clinical Nurse Specialist',
    'Nurse Practitioner',
    'Clinical Nurse Consultant',
    'Clinical Nurse Specialist',
    'Nurse-Researcher',
    '*Allied Health Professional',
    'Dietician',
    'Physical Therapist',
    'Occupational Therapist',
    'Social Worker',
    'Speech language pathologist',
    'Psychologist'
]
function handleOtherSelectText(json_object,array,key){
    let tmp_json_object={
        ...json_object
    }
    if(!array.includes(tmp_json_object[key])){
        tmp_json_object[key+'Select'] ="Other";
        tmp_json_object[key+'Textfield'] =tmp_json_object[key];
    }else{
        tmp_json_object[key+'Select'] =tmp_json_object[key];  
    }       
    return tmp_json_object;
}
function formMapper(json_object){
    let final_json_object = {
        ...json_object
    }
    
    const array=[{key:"principalUniversityAffiliation",array:principalUniversityAffiliationArray},
    {key:"principalClinic",array:clinicsArray},
    {key:"secondaryClinic",array:clinicsArray},
    {key:"professionalOccupation",array:professionalCategoryArray},
    {key:"role",array:clinicRoleArray}]
    delete final_json_object['_id'];
    delete final_json_object['__v'];
    delete final_json_object['updatedAt'];
    delete final_json_object['createdAt'];
    delete final_json_object['__proto__'];
   
    array.forEach(element => {
        final_json_object=handleOtherSelectText(final_json_object,element.array,element.key);
    });

    return final_json_object;
}

export default formMapper;