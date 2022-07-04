import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IndexSection } from './styled';
import map from '../../assets/img/map.png';
import { TitleBox } from '../../components/TitleBox';
import { Nav } from '../../components/Nav';

export function Index() {
  return (
    <Container>
      <div className="container">
        <header>
          <TitleBox imageHeight="75%" />
          <Nav />
        </header>
        <IndexSection>
          <div className="info">
            <h2>Faça outras pessoas felizes, dõe suas roupas nesse inverno</h2>
            <p>
              Através desta forma você pode encontrar centros de doação ou
              sinalizar para outras pessoas ou instituições que você possui
              roupas ou precisa de roupas.
            </p>
            <Link to="/map">
              <button type="button">Mapa</button>
            </Link>
          </div>
          <div className="map">
            <img src={map} alt="" />
          </div>
        </IndexSection>
      </div>
    </Container>
  );
}
