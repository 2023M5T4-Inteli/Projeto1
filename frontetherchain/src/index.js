import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CheckboxList from './pages/solicitacaoEntrar';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Meta from './pages/MetamaskPlugin'


const router = createBrowserRouter ([

  {
    path: "/",
    element: <Meta/>
  },
  {
    path: "/CheckboxList",
    element: <CheckboxList/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);