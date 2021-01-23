import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';

export const TeaserContainer = styled.div`
  ${moduleSpace}
  display: flex;

  li {
    list-style: none;
  }
`;

export const TeaserContext = styled.div`
  width: 40%;
`;

export const TeaserImage = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  img {
    margin: 20px;
  }
`;

const Teaser = ({ imagesLength }) => {
  return (
    <TeaserContainer className="container">
      <TeaserContext>
        <h2>Eis SOrten 1.50 </h2>
        <ul>
          <li>
            Schokolade Erdbeermilch Mango Lassi Zimt Zitrone Walnuss
            karamellisiert Weißes Stracciatella mit Ingwer Vanille Stracciatella
            Haselnusskrokant Butterkaramell mit Steinsalz Matcha-Grüner Tee
            Schwarzer Sesam Mango mit Maracuja Vanille mit Kürbiskernöl
          </li>
        </ul>
        <h2>Eis Cafe 2.00</h2>
      </TeaserContext>
      <TeaserImage>
        <div>
          <img src="http://satyr.io/397x327" alt="placeholder" />
          <img src="http://satyr.io/325x325" alt="placeholder" />
        </div>
        <div>
          {imagesLength === 3 ? (
            <img src="http://satyr.io/354x383" alt="placeholder" />
          ) : (
            <>
              <img src="http://satyr.io/354x383" alt="placeholder" />
              <img src="http://satyr.io/354x383" alt="placeholder" />
            </>
          )}
        </div>
      </TeaserImage>
    </TeaserContainer>
  );
};

export default Teaser;
