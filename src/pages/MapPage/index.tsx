import React from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container } from './styled';
import { Map } from '../../components/Map';
import { Link } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';

export function MapPage() {
  return (
    <Container>
      <Map />
      <aside>
        <header>
          <TitleBox justifyContent="center" />
        </header>
        <section>
          <h4>Econtre uma instituição ou uma solicitação de roupas</h4>

          <button type="button">
            <Link to="/map/register">Nova instituição</Link>
          </button>
          <button type="button">Nova solicitação</button>
        </section>
      </aside>
    </Container>
  );
}
