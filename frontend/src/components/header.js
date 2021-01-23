import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 130px;

  @media ${devices.mobile} {
    padding-top: 40px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 100px;
  }
`;

const Header = () => {
  return (
    <NavHeader className="container">
      <h1>Bisc0tti</h1>
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
