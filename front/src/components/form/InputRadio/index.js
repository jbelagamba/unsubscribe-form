import React, {useState} from 'react';
import { useId } from "react-id-generator";
import { FieldGroup, InputTypeRadio, Label } from '../FormStyles';
 
const InputRadio = (props) => {
   const [htmlId] = useId();

   return (
      <FieldGroup bottom={props.bottom} top={props.top}>
         <InputTypeRadio
            type="radio"
            id={htmlId}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
         />
         
         <Label htmlFor={htmlId} clickable>
            {props.label}
         </Label>
      </FieldGroup>
   );
};

export default InputRadio;