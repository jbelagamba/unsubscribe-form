import React from 'react';
import { FieldGroup, InputTypeCheckbox, Label } from '../FormStyles';
 
const InputCheckbox = (props) => {

   return (
      <FieldGroup inline>
         <InputTypeCheckbox
            type="checkbox"
            id={`input-checkbox-${props.name}`}
            name={props.name}
         />
         
         <Label htmlFor={`input-checkbox-${props.name}`} clickable>
            {props.label}
         </Label>
      </FieldGroup>
   );
};

export default InputCheckbox;