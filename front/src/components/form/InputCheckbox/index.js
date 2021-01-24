import React from 'react';
import { useId } from "react-id-generator";
import { FieldGroup, InputTypeCheckbox, Label } from '../FormStyles';
 
const InputCheckbox = (props) => {
   const [htmlId] = useId();

   return (
      <FieldGroup inline bottom={props.bottom} top={props.top}>
         <InputTypeCheckbox
            type="checkbox"
            id={htmlId}
            name={props.name}
            checked={props.checked}
            onChange={props.onChange}
            required={props.required}
         />
         
         <Label htmlFor={htmlId} clickable>
            {props.label}
         </Label>
      </FieldGroup>
   );
};

export default InputCheckbox;