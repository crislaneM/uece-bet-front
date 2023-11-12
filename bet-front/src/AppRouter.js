import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/cadastro';// Certifique-se de ter o componente EsqueciSenha criado

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;