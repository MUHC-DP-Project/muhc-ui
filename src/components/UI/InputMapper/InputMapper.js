import React from 'react'
import Input from '../Input/Input';

function InputMapper(props) {
    
    const {formObject,formName}=props;
    const formElementsArray = [];
    for (let key in formObject) {
        formElementsArray.push({id: key, config: formObject[key]});
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

export default InputMapper
