import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    
    </Routes>
  </BrowserRouter>,
 rootElement
 );