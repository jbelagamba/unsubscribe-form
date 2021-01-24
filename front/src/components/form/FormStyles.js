import styled  from 'styled-components';

export const FieldGroup = styled.div`
   margin-bottom: ${props => `${props.bottom}px`};
   margin-top: ${props => `${props.top}px`};
   ${props => props.inline &&`
     display: flex; 
     justify-content: flex-start;
     align-items: center;
   `}
`;

export const Label = styled.label`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: ${props => props.bold ? '500' : 'normal'};
   cursor: ${props => props.clickable ? 'pointer' : 'default'};
   font-size: 14px;
   line-height: 21px;
   color: #474747;
`;

export const InputTypeText = styled.input`
   width: 100%;
   height: 30px;
   margin-top: 5px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 21px;
   border: none;
   border-bottom: 1px solid;
   border-color: #474747;
   &::placeholder {
      color: #C2C2C2;
   }
   &:focus {
      outline: none;
      border-color: #7F7F7F;
   }
`;

export const CharacterCounter = styled.span`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 18px;
   text-align: right;
   float: right;
   margin-top: 5px;
   color: #000000;
`;

export const InputTypeCheckbox = styled.input`
   height: 16px;
   width: 16px;
   border-radius: 0px;
   cursor: pointer;
   margin-right: 5px;
   border: 1px solid #474747;
`;

export const InputTypeRadio = styled.input`
   width: 13.21px;
   height: 13.21px;
   border: 0.880726px solid #A6A6A6;
   box-sizing: border-box;
   cursor: pointer;
   margin: 0 5px 0 0;
`;