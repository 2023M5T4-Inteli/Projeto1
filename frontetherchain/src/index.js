import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CheckboxList from './pages/solicitacaoEntrar';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MetamaskPlugin from './pages/MetamaskPlugin'
import OutlinedCard from './pages/Notifications';
import Grupos from './pages/visualizarGrupo';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <MetamaskPlugin/>
  },
  {
    path: "/CheckboxList",
    element: <CheckboxList/>,
  },
  {
    path: "/notifications",
    element: <OutlinedCard/>,
  },
  {
    path:"/Grupos",
    element:<Grupos />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);