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

export const NavFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 130px;

  @media ${devices.mobile} {
    margin-top: 40px;
    justify-content: center;
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
      animation: 2s ${wave} linear infinite;
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
    margin-bottom: 70px;

    @media ${devices.mobile} {
      margin-bottom: 40px;
    }
  }

  li {
    margin-left: 100px;

    @media ${devices.mobile} {
      margin-left: 25px;
      margin-right: 25px;
    }
  }
`;

const Footer = ({ footerLinks }) => {
  return (
    <div className="container">
      <NavFooter>
        <ul>
          {footerLinks.map((footerLink, index) => (
            <li key={`footerlink-${index}`}>
              <a
                href={footerLink.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {footerLink.text}
              </a>
            </li>
          ))}
          <li>
            <a href="#id">Impressum</a>
          </li>
        </ul>
      </NavFooter>
    </div>
  );
};

export default Footer;
