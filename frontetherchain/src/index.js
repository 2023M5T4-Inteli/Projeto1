import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckboxList from './pages/solicitacaoEntrar';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MyContextProvider } from './Contextt';
import MetamaskPlugin from './pages/MetamaskPlugin'
import OutlinedCard from './pages/Notifications';
import Grupos from './pages/visualizarGrupo';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <MyContextProvider><MetamaskPlugin/></MyContextProvider>
  },
  {
    path: "/CheckboxList",
    element: <MyContextProvider><CheckboxList/></MyContextProvider>,
  },
  {
    path: "/notifications",
    element: <MyContextProvider><OutlinedCard/></MyContextProvider>,
  },
  {
    path:"/Grupos",
    element:<MyContextProvider><Grupos /></MyContextProvider>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);