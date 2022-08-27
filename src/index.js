import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import "admin-lte";
import "@fortawesome/fontawesome-free/css/all.css";
import "admin-lte/dist/css/adminlte.css";
import './index.css';
import Route_index from './Router/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <Route_index />
    </BrowserRouter>
  
);


