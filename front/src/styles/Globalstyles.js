import styled from 'styled-components';

export const Container = styled.div`
   width: 1019px;
   margin: 50px auto;
   background: #FFFFFF;
   padding: 50px;
   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;

export const PrimaryTitle = styled.h1 `
   font-family: 'Roboto';
   color: #474747;
   font-size: 32px;
   line-height: 35px;
   font-style: normal;
   font-weight: 500;
   display: flex;
   align-items: center;
   letter-spacing: -1px;
   margin-bottom: 50px;
   margin-top: 0;
`;

export const SecondaryTitle = styled.h2 `
   font-family: 'Roboto';
   font-style: normal;
   font-weight: bold;
   font-size: 30px;
   line-height: 16px;
   color: rgba(0, 0, 0, 0.6);
   margin-bottom: 50px;
   margin-top: 0;
   ${props => props.withIcon &&`
      display: flex; 
      justify-content: flex-start;
      align-items: center;
      img {
         margin-left: 10px;
      }
   `}
`;

export const SubTitle = styled.strong `
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 500;
   font-size: 19.376px;
   line-height: 16px;
   color: #474747;
   display: block;
`;

export const Paragraph = styled.span `
   font-family: 'Roboto';
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 21px;
   color: rgba(71, 71, 71, 0.8);
   margin: 0;
   margin-bottom: ${props => `${props.bottom}px`};
   display: block;
   p {
      margin: 0 0 10px 0;
   }
   a {
      color: #4569EF;
   }
`;

export const Form = styled.form `
   margin-top: 40px;
`;

export const Button = styled.button`
   width: ${props => `${props.width}px`};
   height: 34px;
   box-sizing: border-box;
   border-radius: 50px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 21px;
   text-align: center;
   cursor: pointer;
   ${props => props.primary &&`
      color: #C2C2C2;
      background: #FFFFFF;
      border: 1px solid #C2C2C2;
   `}
   ${props => props.secondary &&`
      color: #FFFFFF;
      background: #4569EF;
      border: 1px solid #4569EF;
   `}
   &:focus {
      outline: none;
      border-color: #474747;
   }
`;