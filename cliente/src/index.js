import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Saldo from './Saldo';
import Solicitacao from './Solicitacao'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NameProvider from './Context';
// SetAxiosConfig(Axios);
// CheckOrCreateItemDxTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameProvider>

      <Solicitacao />
      
      {/* <div id="portalEvilCorp">
      <SnackbarProvider>
        <StylesProvider generateClassName={CreateGenerateClassName()}>
          
        </StylesProvider>
      </SnackbarProvider>
    </div> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={< App/>} /> 
        <Route index element={<Solicitacao />} />
      </Routes>
    </BrowserRouter> */}

    </NameProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
