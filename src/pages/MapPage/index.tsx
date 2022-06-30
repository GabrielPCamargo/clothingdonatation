import React from 'react';
import { Container } from './styled';
import { Map } from '../../components/Map';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Link } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';
import dotenv from 'dotenv';
import { Marker } from '../../components/Marker';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <h1>Loading</h1>;
    case Status.FAILURE:
      return <h1>Failure</h1>;
    case Status.SUCCESS:
      return <h1>Success</h1>;
  }
};

export function MapPage() {
  const handleOnClick = (e: google.maps.MapMouseEvent) => {
    console.log(e.latLng?.toJSON());
  };

  return (
    <Container>
      <Wrapper apiKey={process.env.REACT_APP_API_KEY || ''} render={render}>
        <Map onClick={handleOnClick}>
          <Marker
            position={{ lat: -30.09733223303355, lng: -51.312168162811176 }}
          />
          <Marker
            position={{ lat: -30.118419410174702, lng: -51.35079197262563 }}
          />
        </Map>
      </Wrapper>
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
