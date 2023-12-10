import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/cadastro';
import RecSenha from './components/RecSenha/RecSenha';
import Main from './components/Main/index';
import CreateEvent from './components/Main/Adiministrador/CreateEvent';
import Confirm from './components/Cadastro/Confirm';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          
          setIsAuthenticated(true);
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cad-confirm" element={<Confirm></Confirm>} />
        <Route path="/recuperarSenha" element={<RecSenha />} />
        <Route
          path="/main"
          element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-event"
          element={isAuthenticated ? <CreateEvent /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;