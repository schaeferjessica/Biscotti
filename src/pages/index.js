import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Teaser from '../components/teaser';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import useContentfulFooterlinks from '../hooks/use-footerlinks';
import useContentfulJumpmarks from '../hooks/use-jumpmarks';
import useContentfulTeasers from '../hooks/use-teasers';

export const query = graphql`
  {
    file(name: { eq: "eis-sorten" }) {
      childImageSharp {
        fluid(maxWidth: 1860, maxHeight: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const footerLinks = useContentfulFooterlinks();
  const jumpmarks = useContentfulJumpmarks();
  const teasers = useContentfulTeasers();

  return (
    <Layout>
      <SEO />
      <Header image={data.file.childImageSharp.fluid} jumpmarks={jumpmarks} />
      {teasers.map((teaser, index) => (
        <Teaser key={`teaser-${index}`} data={teaser} />
      ))}
      <Footer footerLinks={footerLinks} />
    </Layout>
  );
};

export default IndexPage;
