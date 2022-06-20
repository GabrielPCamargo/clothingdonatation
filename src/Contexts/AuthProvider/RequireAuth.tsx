import React from 'react';
import { useAuth } from './useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Loading } from '../../components/Loading';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (!user) {
    if (loading) {
      return <Loading />;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
