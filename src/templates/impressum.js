import React from 'react';
import Layout from '../components/layout/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { Link } from 'gatsby';

export const TextWrapper = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 14px;

    @media ${devices.mobile} {
      font-size: 12px;
    }
  }

  h1 {
    margin-bottom: 20px;
    font-family: 'Spartan';
    font-weight: 500;
    font-size: 16px;

    @media ${devices.mobile} {
      font-size: 14px;
    }
  }
`;

export const BackLink = styled(Link)`
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: inline-block;
  font-weight: 500;

  @media ${devices.mobile} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
