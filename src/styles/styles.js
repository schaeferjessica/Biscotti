import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  // adding own globals styles //----------------------------------------
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }


  html {
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Spartan', 'PT Sans', 'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.color.blue};
    background-color: ${(props) => props.color.blueLight};
    background-image: linear-gradient(180deg, #FFF5F5 0%, #EAF1F2 100%);
    min-height: 100%;

    @media ${devices.mobile} {
      font-size: 14px;
    }
  }

  h1,
  h2,
  h3 {
    font-family: 'Barrio';
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 35px;

    @media ${devices.mobile} {
      font-size: 30px;
    }
  }

  a {
    font-size: 16px;
    text-decoration: none;
    color: ${(props) => props.color.blue};

    @media ${devices.mobile} {
      font-size: 14px;
    }
  }

  .prevent-scroll {
    position: relative;
    overflow: hidden;
  } 
`;
