import React from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container, Form } from './styled';

export function Login() {
  return (
    <Container>
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

      <section>
        <Form>
          <h2>LOGIN</h2>
          <label htmlFor="email">
            E-MAIL
            <input type="email" name="email" placeholder="example@gmail.com" />
          </label>

          <label htmlFor="password">
            SENHA
            <input type="password" name="password" />
          </label>
          <button type="submit">Entrar</button>
        </Form>
      </section>
    </Container>
  );
}
