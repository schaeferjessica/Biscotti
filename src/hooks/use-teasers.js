import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulTeasers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeaser {
        nodes {
          contentfulid
          text {
            raw
          }
          images {
            position
            image {
              title
              fluid(maxWidth: 410) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.allContentfulTeaser.nodes.map((teaser) => ({
    id: teaser.contentfulid,
    text: teaser.text.raw,
    images: teaser.images,
  }));
};

export default useContentfulTeasers;
