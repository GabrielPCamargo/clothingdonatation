import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Contexts/AuthProvider';
import { AppRoutes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  );
}

export default App;
