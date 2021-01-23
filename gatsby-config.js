require('dotenv').config();
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'BISCOTTI',
    siteUrl: `https://biscotti.netlify.app/`,
    description: `Biscotti`,
    keywords: 'Biscotti, Eis',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
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
