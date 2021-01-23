import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { moduleSpace } from '../styles/container';
import Img from 'gatsby-image';

export const TeaserContainer = styled.div`
  ${moduleSpace}
  display: flex;

  li {
    list-style: none;
  }
`;

export const TeaserContext = styled.div`
  width: 40%;
  margin-top: 20px;

  h2:not(:first-child) {
    margin-top: 70px;
  }

  p {
    margin-top: 20px;
  }

  ul {
    margin-top: 20px;
  }

  li {
    margin-top: 10px;

    p {
      margin-top: 0;
    }
  }
`;

export const TeaserImage = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .image-wrapper {
    width: 100%;
    padding: 20px;
  }
`;

const Teaser = ({ data }) => {
  return (
    <TeaserContainer className="container">
      <TeaserContext>
        {documentToReactComponents(JSON.parse(data.text))}
      </TeaserContext>
      <TeaserImage>
        <div>
          {data.images.map(
            (image) =>
              image.position && (
                <div className="image-wrapper">
                  <Img fluid={image.image.fluid} alt={image.title} />
                </div>
              )
          )}
        </div>
        <div>
          {data.images.map(
            (image) =>
              !image.position && (
                <div className="image-wrapper">
                  <Img fluid={image.image.fluid} alt={image.image.title} />
                </div>
              )
          )}
        </div>
      </TeaserImage>
    </TeaserContainer>
  );
};

export default Teaser;
