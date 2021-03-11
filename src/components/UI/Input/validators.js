const required = value => value ? undefined : 'Required';
const validateDate=value=>{
    const pattern=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return value&&pattern.test(value)?undefined:'invalid date format: DD/MM/YYYY';
}
const validateEmail=value=>{
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return value&&pattern.test(value)?undefined:'invalid email format';
}
const validatePhone=value=>{
    const pattern=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return value&&pattern.test(value)?undefined:'invalid phone format';
}
export default function validators(validatorsList){
 const validators=[];
 validatorsList.forEach(element => {
    switch (element) {
        case "required":
            validators.push(required);
            break;
        case "validateDate":
            validators.push(validateDate);
        break;
        case "validateEmail":
            validators.push(validateEmail);
        break;
        case "validatePhone":
            validators.push(validatePhone);
        break;
        default:
            break;
    }
 });

 return validators
}