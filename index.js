import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListagemAlunos from './Aula3/pages/ListagemAlunos'
import { BrowserRouter, useRoutes, routes } from "react-router-dom";
import Exemplos from './Aula2/ClienteList';
import NavBar from './Aula3/Component/NavBar'
import Cadastro from './Aula3/pages/Cadastro'

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <ListagemAlunos />},
    { path: "/aula2", element: <Exemplos />},
    { path: "/cadastro", element: <Cadastro /> }
  ]);
    return routes;
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
