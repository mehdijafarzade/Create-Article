import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider dir='rtl'>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </ThemeProvider>
   
  
);
