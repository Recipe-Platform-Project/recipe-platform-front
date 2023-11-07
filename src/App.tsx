import React from 'react';
import './App.css';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import { MAIN_PATH, RECIPE_WRITE_PATH } from 'constant';
import BoardWrite from 'views/Board/Write';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH} element={<Main />} />
        <Route path={RECIPE_WRITE_PATH} element={<BoardWrite />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route>
    </Routes>
  );
}

export default App;
