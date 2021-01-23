import React from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from '../styles/breakpoints';

const backgroundWidth = '92px';
const wave = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: ${backgroundWidth} 0;
  }
`;

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
    display: block;
    position: relative;
    padding-bottom: 10px;
    text-align: center;

    &:hover::after,
    &:focus::after {
      animation: 1s ${wave} linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: ${backgroundWidth};
      height: 8px;
      transform: translateX(-50%);
      background-image: url('./images/line.svg');
      background-size: contain;
      background-repeat: repeat-x;
    }
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
