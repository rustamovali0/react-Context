import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  ThemeContext  from './Context/Context';
import './Components/Router/style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeContext>
    
    
  </React.StrictMode>
);
