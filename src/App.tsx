import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './views/Main';
import Membership from 'views/Membership';
import Authentication from 'views/Authentication';
import User from 'views/User';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Main />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route>
    </Routes>
  );
}

export default App;
