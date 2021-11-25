import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import IndexAvances from 'pages/Avances/Index'
import AvancesLog from 'pages/Avances/AvancesLog';
import AvancesTable from 'pages/Avances/AvancesTable';
import EstadoUsuarios from 'pages/usuarios/Index';
import EditarUsuario from 'pages/usuarios/Editar';
import 'styles/globals.css';
import SignUp from 'pages/auth/SignUp';
import Login from 'pages/auth/Login';
import Profile from 'pages/auth/Profile';
import Inscripcion from 'pages/inscripcion/Index';
import EditarInscripcion from 'pages/inscripcion/Editar';
import SupremacyContextProvider from 'context/supremacyContext';
import EstadoProyectos from 'pages/proyectos/EstadoProyectos';
import AuthLayout from 'layouts/AuthLayout';


// import PrivateRoute from 'components/PrivateRoute';

// const httpLink = createHttpLink({
//   uri: 'https://gestion-proyectos-back.herokuapp.com/graphql',
// });

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [userData, setUserData] = useState({});
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <SupremacyContextProvider>
          <BrowserRouter>
            <Routes> 
              <Route path='/auth' element={<AuthLayout/>}>
                <Route path='register' element={<SignUp />} />
                <Route path='login' element={<Login />} />
              </Route>      
              <Route path='/' element={<PrivateLayout />}>
                <Route path='' element={<Index />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='page2' element={<Page2 />} />
                <Route path='category1' element={<IndexCategory1 />} />
                <Route path='proyectos' element={<EstadoProyectos />} />
                <Route path='category1/page1' element={<Category1 />} />
                <Route path='usuarios' element={<EstadoUsuarios />} />
                <Route path='usuarios/editar/:_id' element={<EditarUsuario />} />
                <Route path='inscripcion' element={<Inscripcion />} />
                <Route path='inscripcion/editar/:_id' element={<EditarInscripcion />} />
                <Route path='avances' element={<IndexAvances />} />
                <Route path='avances/edit/:id' element={<AvancesLog />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </SupremacyContextProvider>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
