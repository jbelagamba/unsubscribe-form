import React, {useState}  from 'react';
import { FieldGroup, Label, InputTypeText, CharacterCounter } from '../FormStyles';

const InputText = (props) => { 

   const characterLimit = props.maxLength;
   let [characterCounter, setCounter] = useState(0);
   
   function onKeyUp(ev) {
      const {value} = ev.target;
      setCounter(value.length);      
   }
   

   return (
      <FieldGroup>
         {props.label && (
            <Label className="fieldTitle" htmlFor={`input-text-${props.name}`} bold>
               {props.label}
            </Label>
         )}
         
         <InputTypeText 
            name={props.name} 
            id={`input-text-${props.name}`}
            placeholder={props.placeholder} 
            maxLength={props.maxLength}
            onKeyUp={onKeyUp}
            value={props.value}
            onChange={props.onChange}
         />

         {props.characterCounter && (
            <CharacterCounter className="characterCounter">
               {characterCounter} {characterLimit ? '/' : ''} {characterLimit} {characterCounter > 1 ? 'caracteres' : 'caracter'}
            </CharacterCounter>
         )}
      </FieldGroup>
   );
};

export default InputText;