import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulFooterlinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooterlink {
        nodes {
          link
          text
        }
      }
    }
  `);

  return data.allContentfulFooterlink.nodes.map((link) => ({
    link: link.link,
    text: link.text,
  }));
};

export default useContentfulFooterlinks;
