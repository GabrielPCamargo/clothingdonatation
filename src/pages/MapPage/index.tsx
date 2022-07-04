import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './styled';
import { Map } from '../../components/Map';
import personMarker from '../../assets/icons/personMarker.svg';
import buildingMarker from '../../assets/icons/buildingMarker.svg';
import shirtMarker from '../../assets/icons/shirtMarker.svg';
import { TitleBox } from '../../components/TitleBox';
import { Marker } from '../../components/Marker';
import { InfoWindow } from '../../components/InfoWindow';
import { MapProvider } from '../../Contexts/MapProvider';
import axios from '../../services/axios';

interface IPoint {
  _id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  user: {
    name: string;
    email: string;
  };
  type: string;
  number: string;
}

export function MapPage() {
  const [points, setPoints] = useState<IPoint[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/points');
        setPoints(response.data);
      } catch (err: any) {
        toast.error(
          'Erro ao buscar pontos no servidor: ' + err.response.data.error
        );
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <MapProvider>
        <Map>
          {points?.map((point) => (
            <Marker
              key={point._id}
              icon={
                point.type === 'institution'
                  ? buildingMarker
                  : point.type === 'request'
                  ? personMarker
                  : shirtMarker
              }
              position={point.coordinates}
            >
              <InfoWindow>
                <div>
                  <h3>{point.name}</h3>
                  <button>
                    <a href={`/points/${point._id}`}>Detalhes</a>
                  </button>
                </div>
              </InfoWindow>
            </Marker>
          ))}
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
          <button type="button">
            <Link to="/map/register">Nova solicitação</Link>
          </button>
        </section>
      </aside>
    </Container>
  );
}
