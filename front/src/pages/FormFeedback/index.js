import React from 'react';
import { Container, SecondaryTitle, Paragraph} from 'styles/Globalstyles';
import { Logo } from 'pages/FormUnsubscribe/FormUnsubscribeStyles';

import logo from 'images/logo.png';
import cloudIcon from 'images/cloud-icon.png';

const PagesFormFeedback = () => {
   return (
      <Container>

         <Logo>
            <img src={logo} alt="Logo company" />
         </Logo>

         <SecondaryTitle withIcon>
            Lamentamos que você tenha indo embora ...
            <img src={cloudIcon} alt="Cloud icon" />
         </SecondaryTitle>

         <Paragraph>
            Seu cadastro foi cancelado.
         </Paragraph>
      </Container>
   );
};

export default PagesFormFeedback;