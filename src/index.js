import React from 'react';
import ReactDOM from 'react-dom/client';
import "admin-lte";
import "@fortawesome/fontawesome-free/css/all.css";
import "admin-lte/dist/css/adminlte.css";
import './index.css';
import Routes_index from './Routes/index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routes_index />
);
