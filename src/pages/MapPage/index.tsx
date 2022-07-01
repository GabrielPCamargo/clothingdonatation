import React from 'react';
import { Container } from './styled';
import { Map } from '../../components/Map';
import personMarker from '../../assets/icons/personMarker.svg';
import { Link } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';
import { Marker } from '../../components/Marker';
import { InfoWindow } from '../../components/InfoWindow';
import { MapProvider } from '../../Contexts/MapProvider';

export function MapPage() {
  return (
    <Container>
      <MapProvider>
        <Map>
          <Marker
            icon={personMarker}
            position={{ lat: -30.09733223303355, lng: -51.312168162811176 }}
          >
            <InfoWindow>
              <h1>Testefdasfafakjflakfjlakjfalk</h1>
            </InfoWindow>
          </Marker>
          <Marker
            icon={personMarker}
            position={{ lat: -30.118419410174702, lng: -51.35079197262563 }}
          >
            <InfoWindow>
              <h3>Meu teste 123</h3>
            </InfoWindow>
          </Marker>
        </Map>
      </MapProvider>
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
