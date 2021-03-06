import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    <Route index
     element={
       <main style={{padding:"1rem"}}>
         <p>Select an invoice</p>
       </main>
         }
         />
    <Route path=":invoiceId" element={<Invoice />}/>
    
    <Route path="*" element={
      <main style={{ padding: "1rem"}}>
        <p>Oops, there's nothing here!</p>
      </main>  
    }
    />
    
    </Routes>
  </BrowserRouter>,
 rootElement
 );