import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// react router torna a aplicação single-page, sem recarregar.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import RegistarNewVideo from './pages/cadastro/Video';
import RegisterNewCategory from './pages/cadastro/Categoria';

const Page404 = () => {
  (
    <div style={{ color: 'white' }}>
      Erro 404
    </div>
  );
};

// DESAFIO : COLOCAR ALGO LEGAL NA Page404

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cadastro/video" element={<RegistarNewVideo />} />
      <Route exact path="/cadastro/categoria" element={<RegisterNewCategory />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);
