import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckboxList from './cooverpages/enterRequest';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MyContextProvider } from './Contextt';
import MetamaskPlugin from './MetamaskPlugin'
import Grupos from './cooverpages/groupView';
import IndRequest from './cooverpages/indRequest';
import ViewGroups from './cooverpages/ViewGroups';
import GruposClient from './clientpages/groupViewClient';
import ViewGroupsClient from './clientpages/ViewGroupsClient';
import IndRequestClient from './clientpages/indRequestClient';
import ViewGroupsClient2 from './clientpages/ViewGroupsClient2';
import IndemnityForm from './clientpages/IndemnityRequest';
import ViewGroupsClient2Load from './clientpages/GroupsClient2Load';
import CellphoneInsurance from './clientpages/infoPage';

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
  {
    path: "/gruposclient",
    element: <MyContextProvider><ViewGroupsClient/></MyContextProvider>
  },
  {
    path: "/group1client",
    element: <MyContextProvider><GruposClient/></MyContextProvider>
  },
  {
    path: "/gruposclient2",
    element: <MyContextProvider><ViewGroupsClient2/></MyContextProvider>,
  },
  {
    path: "/idemnityreq",
    element: <MyContextProvider><IndemnityForm/></MyContextProvider>,
  },
  {
    path: "/indrequestclient",
    element: <MyContextProvider><IndRequestClient/></MyContextProvider>,
  },

  {
    path:"/CellphoneInsurance",
    element: <CellphoneInsurance></CellphoneInsurance>,
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);