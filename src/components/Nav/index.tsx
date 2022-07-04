import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styled';
import { useAuth } from '../../Contexts/AuthProvider/useAuth';

export function Nav() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <ul>
        <li>
          <Link to="/map">Instituições</Link>
        </li>
        <li>
          <Link to="/map">Voluntários</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registrar-se</Link>
            </li>
          </>
        ) : (
          <li>
            <a onClick={() => logOut(() => navigate('/', { replace: true }))}>
              Sair
            </a>
          </li>
        )}
      </ul>
    </Container>
  );
}
