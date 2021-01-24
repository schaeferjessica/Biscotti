import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulHeadermedia = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeadermedia {
        media {
          title
          mobileImage: fluid(maxWidth: 600, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
          desktopImage: fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `);

  return data.contentfulHeadermedia.media;
};

export default useContentfulHeadermedia;
