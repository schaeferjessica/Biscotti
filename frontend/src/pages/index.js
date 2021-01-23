import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Teaser from '../components/teaser';
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
      <Teaser imagesLength={3} />
      <Teaser imagesLength={4} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
