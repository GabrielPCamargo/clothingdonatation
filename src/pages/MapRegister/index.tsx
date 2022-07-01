import React, { useState } from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container, Form } from './styled';
import { Map } from '../../components/Map';
import { Marker } from '../../components/Marker';
import { MapProvider } from '../../Contexts/MapProvider';

export function MapRegister() {
  const [type, setType] = useState('institution');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [coordinates, setCoordinates] = useState<google.maps.LatLng>();

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    setCoordinates(e.latLng);
  };

  return (
    <Container>
      <MapProvider>
        <Map onClick={handleMapClick}>
          <Marker position={coordinates} />
        </Map>
      </MapProvider>
      <aside>
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
        </header>

        <Form>
          <h2>Nova solicitação / Instituição</h2>

          <label htmlFor="type">
            TIPO DE CADASTRO
            <select name="type">
              <option value="institution">Instituição</option>
              <option value="person">Solicitação</option>
              <option value="person">Doação</option>
            </select>
          </label>

          <label htmlFor="name">
            NOME
            <input type="text" name="name" />
          </label>

          <label htmlFor="description">
            DESCRIÇÃO
            <input
              type="text"
              name="description"
              placeholder="Preciso/Irei doar tal coisa..."
            />
          </label>

          <label htmlFor="number">
            TELEFONE
            <input type="tel" name="number" />
          </label>

          <label htmlFor="coordinates">
            COORDENADAS (Selecione no mapa)
            <input type="text" name="coordinates" />
          </label>

          <button type="submit">Criar</button>
        </Form>
      </aside>
    </Container>
  );
}
