import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulJumpmarks = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulJumpmarks {
        nodes {
          text
          targetId
        }
      }
    }
  `);

  return data.allContentfulJumpmarks.nodes.map((link) => ({
    target: link.targetId,
    text: link.text,
  }));
};

export default useContentfulJumpmarks;
