import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

export const NavHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;

  @media ${devices.mobile} {
    padding-top: 30px;
  }

  a {
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <NavHeader className="container">
      <h1>Biscotti</h1>
      <ul>
        <li>
          <a href="#id">Eis Sorten</a>
        </li>
        <li>
          <a href="#id">Eis Laden</a>
        </li>
      </ul>
    </NavHeader>
  );
};

export default Header;
