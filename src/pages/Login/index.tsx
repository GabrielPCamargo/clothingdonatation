import React, { useEffect, useState } from 'react';
import { Container, Form } from './styled';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { TitleBox } from '../../components/TitleBox';

interface Location {
  state: {
    from: {
      pathname: string;
    };
  } | null;
}

export function Login() {
  const { signIn, user } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation() as Location;

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate('/map');
    }
  });

  const handleFormSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn({ email, password }, () => navigate(from));
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
