import React, { useContext, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import anime from 'animejs/lib/anime.es.js';

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

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
      height: 8px;
      transform: translateX(-50%);
      background-image: url('./images/line.svg');
      background-size: contain;
      background-repeat: repeat-x;
    }
  }

  h1 {
    margin-top: 10px;
  }

  ul {
    list-style: none;
  }
`;

export const NavCircle = styled.div`
  position: relative;
  z-index: 1;
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.color.blueLight};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0);

  @media ${devices.mobile} {
    width: 280px;
    height: 280px;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;

    &::after {
      background-attachment: fixed;
    }
  }
`;

const Header = ({ jumpmarks, media }) => {
  const sources = [
    media.mobileImage,
    {
      ...media.desktopImage,
      media: `(min-width: 768px)`,
    },
  ];
  const { colors } = useContext(ThemeContext);
  const headerEl = useRef(null);
  const jumpTo = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const animation = anime({
      targets: headerEl.current,
      scale: [0, 1],
      easing: 'easeOutExpo',
      duration: 1800,
      delay: 400,
    });
    animation.play();
  }, []);

  return (
    <NavHeader className="container">
      <NavCircle color={colors} ref={headerEl}>
        <h1>Bisc0tti</h1>
        <ul>
          {jumpmarks.map((jumpmark) => (
            <li key={jumpmark.target}>
              <a href={`#${jumpmark.target}`} onClick={(e) => jumpTo(e)}>
                {jumpmark.text}
              </a>
            </li>
          ))}
        </ul>
      </NavCircle>
      <Image>
        <BackgroundImage
          Tag="div"
          fluid={sources}
          backgroundColor={`#FFF5F5`}
        ></BackgroundImage>
      </Image>
    </NavHeader>
  );
};

export default Header;
