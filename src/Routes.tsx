import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { MapPage } from './pages/MapPage';
import { Login } from './pages/Login';
import { RequireAuth } from './Contexts/AuthProvider/RequireAuth';
import { Register } from './pages/Register';
import { MapRegister } from './pages/MapRegister';

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
            <MapPage />
          </RequireAuth>
        }
      />
      <Route
        path="/map/register"
        element={
          <RequireAuth>
            <MapRegister />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
