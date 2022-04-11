import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CurrencyConverter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
