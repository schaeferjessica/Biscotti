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
    font-size: 18px;
    line-height: 1.5;
    font-family: 'PT Sans', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.color.blue};
    background-color: ${(props) => props.color.blueLight};
    background: linear-gradient(180deg, #FFF5F5 0%, #EAF1F2 100%);
    background-repeat: no-repeat;
    min-height: 100%;
    @media ${devices.mobile} {
      font-size: 16px;
    }
  }

  h1,
  h2 {
    font-family: 'Barrio';
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 35px;
  }

  a {
    color: ${(props) => props.color.blue};
  }

  .button {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 16px;
    border: 1px solid currentColor;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: 16px;

    @media ${devices.mobile} {
      font-size: 14px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 15px;
      padding-bottom: 10px;
    }

    &:hover,
    &.is-active {
      background-color: white;
    }
  }

  .prevent-scroll {
    position: relative;
    overflow: hidden;
  } 
`;
