import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Index() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <Link to="/map">Ir para o mapa</Link>
    </div>
  );
}
