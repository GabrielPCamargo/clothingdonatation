import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TitleBox } from '../../components/TitleBox';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { Container, Form } from './styled';
import isEmail from 'validator/lib/isEmail';
import axios from '../../services/axios';

export function Register() {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [type, setType] = useState('institution');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/map', { replace: true });
    }
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors = false;

    if (name.length < 4 || name.length > 255) {
      toast.error('O nome deve ter entre 4 e 255 caracteres');
      errors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (password.length < 8 || password.length > 32) {
      toast.error('A senha deve possuir entre 8 e 32 carcteres');
      errors = true;
    }

    if (password != passwordRepeat) {
      toast.error('A senhas não coincidem');
      errors = true;
    }

    if (errors) return;

    try {
      const response = await axios.post('/register', {
        type,
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success('Usuário criado com sucesso');
        signIn({ email, password }, () => navigate('/map', { replace: true }));
        return;
      }

      toast.error('Houve um erro na requisição');
    } catch (err: any) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <Container>
      <header>
        <TitleBox justifyContent="center" />
      </header>

      <section>
        <Form onSubmit={handleFormSubmit}>
          <h2>Registre-se</h2>

          <label htmlFor="type">
            TIPO DE CADASTRO
            <select name="type" onChange={(e) => setType(e.target.value)}>
              <option value="institution">Instiuição</option>
              <option value="person">Pessoa Física</option>
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

          <label htmlFor="email">
            E-MAIL
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            SENHA
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label htmlFor="passwordRepeat">
            REPETIR A SENHA
            <input
              type="password"
              name="passwordRepeat"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </label>

          <button type="submit">Registrar-se</button>
        </Form>
      </section>
    </Container>
  );
}
