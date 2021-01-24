import React, { useState } from 'react';
import { Container, PrimaryTitle, Form, Button } from 'styles/Globalstyles';

import InputText from 'components/form/InputText';
import InputCheckbox from 'components/form/InputCheckbox';

const initialValues = {
   justification: '',
   observation: false,
};

const PagesFormJustification = () => {
   const [values, setValues] = useState(initialValues);

   function onChangeInputs(event) {
      const {name, value} = event.target;
      setValues({...values, [name]: value});
   }

   function saveOnlocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
      window.location.reload();
   }

   function submitFormJustification(event) {
      event.preventDefault();

      const formJustificationData = {
         justification: event.target.elements.justification.value,
         observation: event.target.elements.observation.checked
      }

      saveOnlocalStorage('@formJustification', formJustificationData);  

   }

   return (
      <Container>
         <PrimaryTitle>Adicionar nova justificativa</PrimaryTitle>
         <Form onSubmit={submitFormJustification}>
            <InputText 
               name="justification"
               placeholder="Digite um motivo para fazer opt out"
               label="Justificativa"
               maxLength="150"
               characterCounter
               onChange={onChangeInputs}
               bottom="50"
               required="required">
            </InputText>

            <InputCheckbox 
               name="observation"
               label="Permitir que o usuário informe uma observação."
               onChange={onChangeInputs}
               bottom="50">
            </InputCheckbox>

            <Button width="210" primary>Salvar alterações</Button>
         </Form>
      </Container>
   );
};

export default PagesFormJustification;