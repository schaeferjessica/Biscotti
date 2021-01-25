import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header';
import Teaser from '../components/teaser';
import Footer from '../components/footer';
import useContentfulFooterlinks from '../hooks/use-footerlinks';
import useContentfulJumpmarks from '../hooks/use-jumpmarks';
import useContentfulTeasers from '../hooks/use-teasers';
import useContentfulHeadermedia from '../hooks/use-headermedia';

const IndexPage = () => {
  const footerLinks = useContentfulFooterlinks();
  const jumpmarks = useContentfulJumpmarks();
  const teasers = useContentfulTeasers();
  const headermedia = useContentfulHeadermedia();

  return (
    <Layout>
      <Header media={headermedia} jumpmarks={jumpmarks} />
      {teasers.map((teaser, index) => (
        <Teaser key={`teaser-${index}`} data={teaser} />
      ))}
      <Footer footerLinks={footerLinks} />
    </Layout>
  );
};

export default IndexPage;
