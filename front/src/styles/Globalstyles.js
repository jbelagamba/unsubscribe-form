import styled from 'styled-components';

export const Container = styled.div`
   width: 1019px;
   margin: 50px auto;
   background: #FFFFFF;
   padding: 50px;
   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1 `
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

export const Form = styled.form `
   margin-top: 40px;
`;

export const Button = styled.button`
   width: ${props => `${props.width}px`};
   height: 34px;
   background: #FFFFFF;
   border: 1px solid #C2C2C2;
   box-sizing: border-box;
   border-radius: 50px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 21px;
   text-align: center;
   color: #C2C2C2;
   float: right;
   &:focus {
      outline: none;
      border-color: #474747;
   }
`;