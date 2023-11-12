import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/cadastro';
import RecSenha from './components/RecSenha/RecSenha';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recuperarSenha" element={<RecSenha />}/>
        </Routes>
    </Router>
  );
};

export default AppRouter;