import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckboxList from './cooverpages/enterRequest';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MyContextProvider } from './Contextt';
import MetamaskPlugin from './MetamaskPlugin'
import Grupos from './cooverpages/groupView';
import IndRequest from './cooverpages/indRequest';
import ViewGroups from './cooverpages/ViewGroups';

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

  // {
  //   path: "/grupos",
  //   element: <MyContextProvider><ViewGroups/></MyContextProvider>
  // },
  // {
  //   path: "/group1",
  //   element: <MyContextProvider><Grupos/></MyContextProvider>
  // },
  // {
  //   path: "/indrequest",
  //   element: <MyContextProvider><IndRequest/></MyContextProvider>,
  // },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);