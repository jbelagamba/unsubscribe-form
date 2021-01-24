import styled  from 'styled-components';

export const FlexGrid = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`;

export const FlexItem = styled.div`
   width: ${props => `${props.size}%`};
`;

export const Logo = styled.div`
   width: 130px;
   height: 60px;
   margin-bottom: 100px;
`;

