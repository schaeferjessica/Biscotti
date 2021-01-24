import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { moduleSpace } from '../styles/container';
import { devices } from '../styles/breakpoints';
import Img from 'gatsby-image';

export const TeaserContainer = styled.div`
  ${moduleSpace}
  display: flex;

  li {
    list-style: none;
  }

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const TeaserContext = styled.div`
  width: 40%;
  margin-top: 20px;

  @media ${devices.mobile} {
    width: 100%;
  }

  h2:not(:first-child) {
    margin-top: 70px;
  }

  p {
    margin-top: 10px;
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

  @media ${devices.mobile} {
    ${moduleSpace};
    width: 100%;
  }

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .image-wrapper {
    width: 100%;
    padding: 20px;

    @media ${devices.mobile} {
      padding: 10px;
    }
  }

  img {
    transition: transform 0.5s ease-in-out, opacity 500ms ease 0s !important;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Teaser = ({ data }) => {
  return (
    <TeaserContainer id={data.id} className="container">
      <TeaserContext>
        {documentToReactComponents(JSON.parse(data.text))}
      </TeaserContext>
      <TeaserImage>
        <div>
          {data.images.map(
            (image, index) =>
              image.position && (
                <div className="image-wrapper" key={`teaser-${index}`}>
                  <Img fluid={image.image.fluid} alt={image.title} />
                </div>
              )
          )}
        </div>
        <div>
          {data.images.map(
            (image, index) =>
              !image.position && (
                <div className="image-wrapper" key={`teaser-${index}`}>
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
