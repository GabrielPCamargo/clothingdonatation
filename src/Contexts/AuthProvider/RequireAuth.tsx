import React from 'react';
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
import { getUserLocalStorage } from './utils';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const authLS = getUserLocalStorage();

  if (!auth.user && !authLS) {
    return <Navigate to="/login" />;
  }

  return children;
}
