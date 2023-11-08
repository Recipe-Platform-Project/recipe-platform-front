import React from "react";
import "./App.css";
import Main from "./views/Main";
import { Outlet, Route, Routes } from "react-router-dom";

import {
  MAIN_PATH,
  MEMBERSHIP_WITHDRAWAL_PATH,
  PASSWORD_UPDATE_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  USER_RECIPE,
  RECIPE_DETAIL_PATH,
  CHEF_PATH,
  CHEF_SEARCH_PATH,
  USER_SEARCH_RECIPE,
  USER_FOUND_PATH,
  USER_UPDATE_PATH,
  RECIPE_WRITE_PATH,
  RECIPE_LIST_PATH,
  RECIPE_UPDATE_PATH,
  RANKING_PATH,
  CHEF_LIST_PATH,
  SEARCH_PATH
} from "constant";
import SignUp from "views/Authentication/Sign-Up";
import SignIn from "views/Authentication/Sign-In";
import BoardWrite from "views/Board/Write";
import UserUpdate from "views/update/UserUpdate";
import PasswordUpdate from "views/update/PasswordUpdate";
import MembershipWithdrawal from "views/Membership/MembershipWithdrawal";
import UserFound from "views/Membership/UserFound";
import User from 'views/User';
import Chef from 'views/Chef';
import Search from 'views/Search';
import Ranking from 'views/Ranking';
import Container from './layouts/Container';
import RecipeDetail from 'views/Board/Detail';
import CookingReviewComments from 'components/Reviewcomments';
import Comments from 'components/Comments';
import Modals from 'components/Modals';
import BoardUpdate from "views/Board/Update";
import BoardDetail from "views/Board/Detail";

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH} element={<Main />} />
        
        <Route path={SIGN_IN_PATH} element={<SignIn />} />
        <Route path={SIGN_UP_PATH} element={<SignUp />} />
        <Route path={USER_FOUND_PATH} element={<UserFound />} />
        <Route path={USER_UPDATE_PATH} element={<UserUpdate />} />
        <Route path={PASSWORD_UPDATE_PATH} element={<PasswordUpdate />} />
        <Route path={MEMBERSHIP_WITHDRAWAL_PATH} element={<MembershipWithdrawal />} />

        <Route path={USER_RECIPE(':searchEmail')} element={<User />} />
        <Route path={USER_SEARCH_RECIPE(':searchEmail')(':word')} element={<User />} />

        <Route path={RANKING_PATH} element={<Ranking />} />


        <Route path={CHEF_PATH} element={<Chef />} />
        <Route path={CHEF_SEARCH_PATH(':word')} element={<Chef />} />

        <Route path={SEARCH_PATH(':word')} element={<Search />} />

        <Route path={RECIPE_LIST_PATH('')} element={<Search />} />
        <Route path={RECIPE_LIST_PATH(':word')} element={<Search />} />
        
        <Route path={RECIPE_DETAIL_PATH(':boardNumber')} element={<BoardDetail />} />
        <Route path={RECIPE_WRITE_PATH} element={<BoardWrite />} />
        <Route path={RECIPE_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />} />
        
        <Route path='/modal' element={<Modals/>} />

        <Route path='*' element={<h1>404 Not Found</h1>} />

      </Route>
    </Routes>
  );
}

export default App;
