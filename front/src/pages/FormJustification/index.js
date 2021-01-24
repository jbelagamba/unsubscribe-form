import React from 'react';
import { Container, Title, Form, Button } from 'styles/Globalstyles';

import InputText from 'components/form/InputText';
import InputCheckbox from 'components/form/InputCheckbox';

const PagesFormJustification = () => {
   return (
      <Container>
         <Title>Adicionar nova justificativa</Title>
         <Form>
            <InputText 
               name="justification"
               placeholder="Digite um motivo para fazer opt out"
               label="Justificativa"
               maxLength="150"
               characterCounter>
            </InputText>

            <InputCheckbox 
               name="observation"
               label="Permitir que o usuário informe uma observação. ">
            </InputCheckbox>

            <Button  width="210">Salvar alterações</Button>
         </Form>
      </Container>
   );
};

export default PagesFormJustification;