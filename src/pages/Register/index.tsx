import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { Container, Form } from './styled';

export function Register() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/map', { replace: true });
    }
  });

  return (
    <Container>
      <header>
        <TitleBox justifyContent="center" />
      </header>

      <section>
        <Form>
          <h2>Registre-se</h2>

          <label htmlFor="type">
            TIPO DE CADASTRO
            <select name="type">
              <option value="institution">
                <li>Instiuição</li>
              </option>
              <option value="person">Pessoa Física</option>
            </select>
          </label>

          <label htmlFor="name">
            NOME
            <input type="text" name="name" />
          </label>

          <label htmlFor="email">
            E-MAIL
            <input type="email" name="email" placeholder="example@gmail.com" />
          </label>

          <label htmlFor="password">
            SENHA
            <input type="password" name="password" />
          </label>

          <label htmlFor="passwordRepeat">
            REPETIR A SENHA
            <input type="password" name="passwordRepeat" />
          </label>

          <button type="submit">Registrar-se</button>
        </Form>
      </section>
    </Container>
  );
}
