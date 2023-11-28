import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/cadastro';
import RecSenha from './components/RecSenha/RecSenha';
import Main from './components/Main/index';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado (por exemplo, verificando se há um token JWT no localStorage)
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperarSenha" element={<RecSenha />} />
        <Route
          path="/main"
          element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;