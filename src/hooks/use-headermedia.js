import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulHeadermedia = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeadermedia {
        media {
          title
          fluid(maxWidth: 1860, maxHeight: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `);

  return data.contentfulHeadermedia.media;
};

export default useContentfulHeadermedia;
