import React from 'react';
import './App.css';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import { MAIN_PATH, RECIPE_LIST_PATH } from 'constant';
import Search from 'views/Search';
import Ranking from 'views/Ranking';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH} element={<Main />} />
        {/* /recipe/list/ */}
        <Route path={RECIPE_LIST_PATH('')} element={<Search />} />
        <Route path={RECIPE_LIST_PATH(':word')} element={<Search />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route>
    </Routes>
  );
}

export default App;
