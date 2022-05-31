import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Index } from './pages/Index';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import { useAuth } from './Contexts/AuthProvider';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/map"
        element={
          <RequireAuth>
            <Map />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
