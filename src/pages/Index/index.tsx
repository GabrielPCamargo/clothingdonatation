import React, { useEffect } from 'react';
import { useAuth } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

export function Index() {
  const auth = useAuth();

  useEffect(() => {
    auth.signin({ name: 'gabriel' });
  }, []);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div>
      <h1>Olá mundo</h1>
      <Link to="/map">Ir para o mapa</Link>
    </div>
  );
}
