require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'BISCOTTI',
    siteUrl: `https://biscotti.netlify.app/`,
    description: `Biscotti`,
    keywords: 'Biscotti, Eis',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Biscotti',
        short_name: 'Biscotti',
        start_url: `/`,
        description: 'Biscotti Eis',
        background_color: `#EAF1F2`,
        theme_color: `#0C3C87`,
        display: `standalone`,
        lang: 'de',
        icon: 'src/images/favicon.svg',
      },
    },
  ],
};
