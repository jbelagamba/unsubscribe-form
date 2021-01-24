import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'
import { Container, SecondaryTitle, SubTitle, Paragraph, Form, Button } from 'styles/Globalstyles';
import { FlexGrid, FlexItem, Logo } from './FormUnsubscribeStyles';

import InputRadio from 'components/form/InputRadio';
import InputText from 'components/form/InputText';

import logo from 'images/logo.png';
import cloudIcon from 'images/cloud-icon.png';

const radioInputs = [
   {option: 'A frequência dos e-mails é muito alta.', value: 'a-frequencia-dos-emails-e-muito-alta'},
   {option: 'A linguagem utilizada nas mensagens não me agrada', value: 'a-linguagem-utilizada-nas-mensagens-nao-me-agrada'},
   {option: 'O conteúdo não me interessa.', value: 'o-conteudo-nao-me-interessa'},
   {option: 'As mensagens são muito extensas.', value: 'as-mensagens-sao-muito-extensas'},
   {option: 'O aspecto visual das mensagens não me agrada.', value: 'o-aspecto-visual-das-mensagens-nao-me-agrada'},
   {option: 'Não lembro de me inscrever / Nunca me cadastrei.', value: 'nao-lembro-de-me-inscrever-nunca-me-cadastrei'},
   {option: 'Outro', value: 'outro'}
];

function getFromlocalStorage(key) {
   let result = localStorage.getItem(key);
   return JSON.parse(result);
}

let justification = getFromlocalStorage('@formJustification') ? getFromlocalStorage('@formJustification').justification : null;

const initialValues = {
   reason: '',
   reasonObservation: justification,
};

const PagesFormUnsubscribe = () => {
   const [values, setValues] = useState(initialValues);
   const [showReasonObservation, setShowReasonObservation] = useState(false);

   function onChangeInputs(event) {
      const {name, value} = event.target;
      setValues({...values, [name]: value});
      if(name == 'reason') {
         setShowReasonObservation(value == 'outro' ? true : false);
      }
   }

   function saveOnlocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
      window.location.reload();
   }

   function submitFormUnsubscribe(event) {
      event.preventDefault();

      const formUnsubscribeData ={
         reason: event.target.elements.reason.value,
         reasonObservation: showReasonObservation ? event.target.elements.reasonObservation.value : null
      }

      saveOnlocalStorage('@formUnsubscribe', formUnsubscribeData);
   }

   return (
      <Container>
         <FlexGrid>
            <FlexItem size="40">

               <Logo>
                  <img src={logo} alt="Logo company" />
               </Logo>

               <SecondaryTitle withIcon>
                  Nós sentiremos sua falta
                  <img src={cloudIcon} alt="Cloud icon" />
               </SecondaryTitle>

               <Paragraph>
                  Lamentamos ver você indo embora.
               </Paragraph>

               <Paragraph>
                  <ReactMarkdown>
                     Para que possamos **melhorar nossa comunicação**, gostaríamos de **saber os motivos** que o levaram a tomar essa decisão.
                  </ReactMarkdown>
               </Paragraph>

               <Paragraph>
                  <ReactMarkdown>
                     **O questionário é opcional.**
                  </ReactMarkdown>
               </Paragraph>

            </FlexItem>

            <FlexItem size="40">
               <SubTitle>Por que você quer se descadastrar?</SubTitle>

               <Form onSubmit={submitFormUnsubscribe}>
                  {radioInputs.map((input, index) => (
                     <InputRadio
                        name='reason'
                        label={input.option}
                        value={input.value}
                        onChange={onChangeInputs}
                        key={index}
                        bottom="25">
                     </InputRadio>
                  ))}

                  {showReasonObservation && (
                     <InputText 
                        name="reasonObservation"
                        placeholder="Descreva o motivo"
                        maxLength="150"
                        characterCounter
                        onChange={onChangeInputs}
                        bottom="40"
                        top="-25"
                        value={values.reasonObservation}>
                     </InputText>
                  )}

                  <Paragraph bottom="30">
                     <ReactMarkdown>
                        O descadastramento será efetuado para o e-mail: [nome.sobrenome@pmweb.com.br](#)
                     </ReactMarkdown>
                  </Paragraph>
                  
                  <Button width="120" secondary>Descadastrar</Button>
               </Form>
            </FlexItem>
         </FlexGrid>
      </Container>
   );
};

export default PagesFormUnsubscribe;