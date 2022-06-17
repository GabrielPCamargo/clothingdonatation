import React, { useState } from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container, Form } from './styled';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Login() {
  const { signin, user } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleFormSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signin({ email, password });
    navigate(-1);
  };

  return (
    <Container>
      <header>
        <div className="titlebox">
          <img src={clothes} alt="" onClick={() => navigate('/')} />
          <div>
            <h1 onClick={() => navigate('/')}>
              Clothing
              <br />
              Donation
            </h1>
          </div>
        </div>
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
