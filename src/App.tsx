import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import { USER_RECIPE, RECIPE_DETAIL_PATH, USER_WRITING_RECIPE, CHEF_PATH, CHEF_SEARCH_PATH, USER_SEARCH_RECIPE } from 'constant';
import User from 'views/User';
import Chef from 'views/Chef';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Main />} />
        <Route path={RECIPE_DETAIL_PATH(':boardNumber')} element={<Main />} />

        <Route path={USER_RECIPE(':searchEmail')} element={<User />} />
        <Route path={USER_WRITING_RECIPE(':searchEmail')} element={<User />} />
        <Route path={USER_SEARCH_RECIPE(':searchEmail')(':word')} element={<User />} />

        <Route path={CHEF_PATH} element={<Chef />} />
        <Route path={CHEF_SEARCH_PATH(':word')} element={<Chef />} />

        <Route path='/search' element={<Main />} />
        <Route path='/search/:word' element={<Main/>} />

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route> 
    </Routes>
  );
}

export default App;
