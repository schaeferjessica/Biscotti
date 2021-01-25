import '../../../static/fonts.css';
import React from 'react';
import GlobalNormalizer from '../../styles/normalize';
import GlobalStyles from '../../styles/styles';
import GlobalContainer from '../../styles/container';
import { colors } from '../../styles/color';
import ThemeContext from '../../styles/themecontext';
import SEO from '../seo';

const Layout = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ colors }}>
      <SEO />
      <GlobalNormalizer />
      <GlobalStyles color={colors} />
      <GlobalContainer />
      {children}
    </ThemeContext.Provider>
  );
};

export default Layout;
