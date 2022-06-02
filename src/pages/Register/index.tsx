import React from 'react';
import clothes from '../../assets/img/clothes.png';
import { Container, Form } from './styled';

export function Register() {
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
