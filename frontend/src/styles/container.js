import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

export default createGlobalStyle`
  .container {
    max-width: 2000px;
    margin: 0 auto;
    padding-left: 70px;
    padding-right: 70px;

    @media ${devices.tablet} {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media ${devices.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export const moduleSpace = `
  margin-top: 180px;

  @media ${devices.tablet} {
    margin-top: 60px;
  }
`;
