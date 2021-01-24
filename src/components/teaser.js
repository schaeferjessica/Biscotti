import React, { useContext } from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { moduleSpace } from '../styles/container';
import { devices } from '../styles/breakpoints';
import ThemeContext from '../styles/themecontext';
import Img from 'gatsby-image';

export const TeaserContainer = styled.div`
  ${moduleSpace}
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  h2 {
    margin-bottom: 20px;
  }

  h2:not(:first-child) {
    margin-top: 50px;
  }

  p {
    margin: 5px 0;
  }

  li {
    margin: 10px 0;
    list-style: none;
    position: relative;

    p {
      margin-left: 22px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      width: 5px;
      height: 3px;
      background-color: ${(props) => props.color.blue};
    }
  }
`;

export const TeaserImageWrapper = styled.div`
  width: 60%;

  @media ${devices.mobile} {
    width: 100%;
  }
`;
export const TeaserImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: -20px;
  margin-right: -20px;

  @media ${devices.mobile} {
    ${moduleSpace};
    margin-left: -10px;
    margin-right: -10px;
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
  const { colors } = useContext(ThemeContext);
  return (
    <TeaserContainer id={data.id} className="container">
      <TeaserContext color={colors}>
        {documentToReactComponents(JSON.parse(data.text))}
      </TeaserContext>
      <TeaserImageWrapper>
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
      </TeaserImageWrapper>
    </TeaserContainer>
  );
};

export default Teaser;
