import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter } from 'react-router-dom';

import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu';
import Personajes from './components/Personajes/Personajes';
import Episodios from './components/Episodios/Episodios';
import Citas from './components/Citas'

const router = createHashRouter([
  {
    path:'/',
    elements:<Home />
  },
  {
    path:'/personajes',
    elements:<Personajes />
  },
  {
    path:'/episodios',
    elements:<Episodios />
  },
  {
    path:'/citas',
    elements:<Citas />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
