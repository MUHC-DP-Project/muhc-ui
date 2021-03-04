import React from 'react'
import Input from '../Input/Input';
function SimpleMultipageForm(props) {
    
    const json_obj=props.json_obj;
    const formName=props.formName;
    const formElementsArray = [];
    for (let key in json_obj) {
        formElementsArray.push({id: key, config: json_obj[key]});
    }
    return (
        <React.Fragment>
        {formElementsArray.map(formElement => (<Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            id={formElement.id}
            formName={formName}
           />))
        }     
    </React.Fragment>
    )
}

export default SimpleMultipageForm
