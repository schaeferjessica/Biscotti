import React from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from '../styles/breakpoints';
import Img from 'gatsby-image';

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
  margin-top: 130px;

  @media ${devices.mobile} {
    margin-top: 40px;
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
  }

  li {
    margin-left: 100px;
  }
`;

export const Image = styled.div`
   {
    margin-top: 130px;
  }
`;

const Header = ({ jumpmarks, media }) => {
  return (
    <div className="container">
      <NavHeader>
        <h1>Bisc0tti</h1>
        <ul>
          {jumpmarks.map((jumpmark) => (
            <li key={jumpmark.target}>
              <a href={`#${jumpmark.target}`}>{jumpmark.text}</a>
            </li>
          ))}
        </ul>
      </NavHeader>
      <Image>
        <Img fluid={media.fluid} alt={media.title} />
      </Image>
    </div>
  );
};

export default Header;
