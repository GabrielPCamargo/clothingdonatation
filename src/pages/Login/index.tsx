import React, { useState } from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container, Form } from './styled';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';

export function Login({ prevPath }: { prevPath?: string }) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleFormSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn({ email, password });
    navigate('/map', { replace: true });
  };

  return (
    <Container>
      <header>
        <TitleBox justifyContent="center" />
      </header>

      <section>
        <Form onSubmit={handleFormSubmit}>
          <h2>LOGIN</h2>
          <label htmlFor="email">
            E-MAIL
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </label>

          <label htmlFor="password">
            SENHA
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </label>
          <button type="submit">Entrar</button>
        </Form>
      </section>
    </Container>
  );
}
