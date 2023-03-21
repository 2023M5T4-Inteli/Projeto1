import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckboxList from './pages/enterRequest';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MyContextProvider } from './Contextt';
import MetamaskPlugin from './MetamaskPlugin'
import Grupos from './pages/groupView';
import IndRequest from './pages/indRequest';
import ViewGroups from './pages/ViewGroups';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <MyContextProvider><MetamaskPlugin/></MyContextProvider>
  },

  // Páginas da Coover
  {
    path: "/grupos",
    element: <MyContextProvider><ViewGroups/></MyContextProvider>
  },
  {
    path: "/group1",
    element: <MyContextProvider><Grupos/></MyContextProvider>
  },
  {
    path: "/requisicoes",
    element: <MyContextProvider><CheckboxList/></MyContextProvider>,
  },
  {
    path: "/indrequest",
    element: <MyContextProvider><IndRequest/></MyContextProvider>,
  },

  // Páginas do cliente


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);