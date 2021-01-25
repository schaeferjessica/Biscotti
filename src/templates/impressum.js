import React from 'react';
import Layout from '../components/layout/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const TextWrapper = styled.div`
  p {
    margin-top: 20px;
  }
`;

export const BackLink = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
`;

const Impressum = ({ pageContext }) => {
  return (
    <Layout>
      <TextWrapper className="container">
        <BackLink to="/">{`<<`}</BackLink>
        {documentToReactComponents(JSON.parse(pageContext.text))}
      </TextWrapper>
    </Layout>
  );
};

export default Impressum;
