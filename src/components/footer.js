import React from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';
import { Link } from 'gatsby';

const backgroundWidth = '105px';
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
  ${moduleSpace};

  @media ${devices.mobile} {
    justify-content: center;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    position: relative;
    padding-bottom: 10px;
    text-align: center;

    &:hover::after {
      animation: 2.5s ${wave} linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: ${backgroundWidth};
      height: 10px;
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
    margin-left: 60px;

    @media ${devices.mobile} {
      margin-left: 20px;
      margin-right: 20px;
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
            <Link to="/impressum">Impressum</Link>
          </li>
        </ul>
      </NavFooter>
    </div>
  );
};

export default Footer;
