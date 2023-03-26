import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App';
import Home from './pages/Home'
import Notifications from './pages/Notifications';
import Request from './pages/Request'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

