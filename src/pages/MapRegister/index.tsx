import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { Container, Form } from './styled';
import { Map } from '../../components/Map';
import { Marker } from '../../components/Marker';
import { MapProvider } from '../../Contexts/MapProvider';
import { TitleBox } from '../../components/TitleBox';
import axios from '../../services/axios';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';

export function MapRegister() {
  const [type, setType] = useState('institution');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState('');
  const [coordinates, setCoordinates] = useState<google.maps.LatLng>();

  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    setCoordinates(e.latLng);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const types = ['institution', 'request', 'donation'];
    const errors = [];

    if (!types.includes(type)) {
      errors.push('Tipo deve ser instituição, requisição ou doação');
    }

    if (name.length < 4 || name.length > 255) {
      errors.push('Nome deve ter entre 4 e 255 caracteres');
    }

    if (description.length < 4 || description.length > 255) {
      errors.push('Descrição deve ter entre 4 e 255 caracteres');
    }

    if (number.length != 14) {
      errors.push('Algo de errado com o número de telefone');
    }

    if (coordinates === undefined) {
      errors.push('Você deve selecionar um ponto no mapa');
    }

    if (errors.length) {
      errors.map((err) => toast.error(err));
      return;
    }

    try {
      const response = await axios.post('/points', {
        name,
        description,
        number,
        type,
        coordinates: coordinates?.toJSON(),
      });

      console.log(response);

      toast.success('Ponto criado com sucesso');
      navigate('/map');
    } catch (err: any) {
      console.log(err);
      if (err.response.status === 401) {
        toast.error(
          'Erro ao criar ponto: Sem autorização, faça login novamente!'
        );
        logOut(() => navigate('/login'));
      }
      if (err.response.status === 400) {
        toast.error('Erro ao criar um ponto: verifique os dados enviados');
      }
    }
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
          <TitleBox justifyContent="center" />
        </header>

        <Form onSubmit={handleFormSubmit}>
          <h2>Nova solicitação / Instituição</h2>

          <label htmlFor="type">
            TIPO DE CADASTRO
            <select name="type" onChange={(e) => setType(e.target.value)}>
              <option value="institution">Instituição</option>
              <option value="request">Solicitação</option>
              <option value="donation">Doação</option>
            </select>
          </label>

          <label htmlFor="name">
            NOME
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="description">
            DESCRIÇÃO
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Preciso/Irei doar tal coisa..."
            />
          </label>

          <label htmlFor="number">
            TELEFONE
            <InputMask
              mask="(99)99999-9999"
              type="tel"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumber(e.target.value)
              }
              value={number}
            />
          </label>

          <label htmlFor="coordinates">
            COORDENADAS (Selecione no mapa)
            <input
              type="text"
              name="coordinates"
              value={coordinates?.toString()}
            />
          </label>

          <button type="submit">Criar</button>
        </Form>
      </aside>
    </Container>
  );
}
