import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styled';
import { Map } from '../../components/Map';
import personMarker from '../../assets/icons/personMarker.svg';
import buildingMarker from '../../assets/icons/buildingMarker.svg';
import shirtMarker from '../../assets/icons/shirtMarker.svg';
import { Link, useParams } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';
import { Marker } from '../../components/Marker';
import { FaArrowLeft } from 'react-icons/fa';
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

export function PointInfo() {
  const [point, setPoint] = useState<IPoint | undefined>();

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/points/${id}`);
        setPoint(response.data);
      } catch (err: any) {
        toast.error(
          'Erro ao buscar pontos no servidor: ' + err.response.data.error
        );
      }
    };

    getData();
  }, []);

  if (!point) return <></>;

  return (
    <Container>
      <MapProvider>
        <Map>
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
          ></Marker>
        </Map>
      </MapProvider>
      <aside>
        <header>
          <TitleBox justifyContent="center" />
        </header>
        <section>
          <nav>
            <Link to="/map">
              <FaArrowLeft size="25" />
            </Link>
          </nav>

          <h3>{point.name}</h3>
          <p>
            Tipo:{' '}
            {point.type === 'request'
              ? 'requisição'
              : point.type === 'donation'
              ? 'doação'
              : 'instituição'}
          </p>
          <p>Descrição: {point.description}</p>
          <p>
            Telefone: <a href={`tel:${point.number}`}>{point.number}</a>
          </p>
        </section>
      </aside>
    </Container>
  );
}
