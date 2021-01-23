import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';

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
  return (
    <Layout>
      <SEO />
      <Header image={data.file.childImageSharp.fluid} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
