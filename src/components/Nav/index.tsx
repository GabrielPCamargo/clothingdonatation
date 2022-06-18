import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';
import { Container } from './styled';

export function Nav() {
  const { user, logOut } = useAuth();

  return (
    <Container>
      <ul>
        <li>
          <Link to="/map">Instituições</Link>
        </li>
        <li>
          <Link to="/map">Volutarios</Link>
        </li>
        {!user ? (
          <>
            <li>
              {' '}
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registrar-se</Link>
            </li>
          </>
        ) : (
          <li>
            <a onClick={() => logOut()}>Sair</a>
          </li>
        )}
      </ul>
    </Container>
  );
}
