import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import visual from './pages/visualizar_Grupos'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Meta from './pages/MetamaskPlugin'


const router = createBrowserRouter ([

  {
    path: "/",
    element: <Meta/>
  },
  {
    path: "/visual",
    element: <visual/>,
  }



])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);