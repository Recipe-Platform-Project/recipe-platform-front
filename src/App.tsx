import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import RecipeDetail from 'views/Board/Detail';
import CookingReviewComments from 'components/Reviewcomments';
import Comments from 'components/Comments';
import Modals from 'components/Modals';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Main />} />
        <Route path='/board/detail' element={<RecipeDetail />} />
        <Route path='/board/comments' element={<Comments />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/modal' element={<Modals/>} />
      </ Route>
    </Routes>
  );
}

export default App;
