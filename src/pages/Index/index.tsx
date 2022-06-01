import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';
import clothes from '../../assets/img/clothes.png';
import map from '../../assets/img/map.png';
import { Container, IndexSection } from './styled';

export function Index() {
  return (
    <Container>
      <div className="container">
        <header>
          <div className="titlebox">
            <img src={clothes} alt="" />
            <div>
              <h1>
                Clothing
                <br />
                Donation
              </h1>
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/map">Instituições</Link>
              </li>
              <li>
                <Link to="/map">Volutarios</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Registrar-se</Link>
              </li>
            </ul>
          </nav>
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
