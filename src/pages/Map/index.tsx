import React from 'react';

import { useAuth } from '../../Contexts/AuthProvider';

export function Map() {
  const auth = useAuth();
  console.log(auth);
  return <h1>Map</h1>;
}
