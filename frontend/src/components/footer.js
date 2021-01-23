import React from 'react';
import styled from 'styled-components';
import { moduleSpace } from '../styles/container';

export const FooterEl = styled.footer`
  ${moduleSpace}
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterEl className="container">
     <p>footer</p>
    </FooterEl>
  );
};

export default Footer;
