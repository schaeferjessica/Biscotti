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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 20px;

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

  ul {
    list-style: none;
    display: flex;

    li:not(:first-child) {
      margin-left: 40px;
    }
  }
`;

export const NavContext = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.color.rosa};

  .title {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 20%;
  opacity: 0;
  width: 100%;
  flex: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;

    @media ${devices.tabletMin} {
      &::after {
        background-attachment: fixed;
      }
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
  const contextEl = useRef(null);
  const imageEl = useRef(null);
  const jumpTo = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    anime({
      targets: imageEl.current,
      top: ['20%', '0%'],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1800,
      delay: 400,
    }).play();
  }, []);

  return (
    <NavHeader className="container">
      <NavContext color={colors} ref={contextEl}>
        <nav>
          <ul>
            {jumpmarks.map((jumpmark) => (
              <li key={jumpmark.target}>
                <a href={`#${jumpmark.target}`} onClick={(e) => jumpTo(e)}>
                  {jumpmark.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="title">
          <h1>Bisc0tti</h1>
        </div>
      </NavContext>
      <ImageWrapper ref={imageEl}>
        <Image>
          <BackgroundImage
            Tag="div"
            fluid={sources}
            backgroundColor={`#FFF5F5`}
          ></BackgroundImage>
        </Image>
      </ImageWrapper>
    </NavHeader>
  );
};

export default Header;
