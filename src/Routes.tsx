import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import { RequireAuth } from './Contexts/AuthProvider/RequireAuth';
import { Register } from './pages/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
