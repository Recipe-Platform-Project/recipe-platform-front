import React from 'react';
import './App.css';
import Main from './views/Main';
import { Outlet, Route, Routes } from "react-router-dom";
import Container from './layouts/Container';
import { MAIN_PATH, MEMBERSHIP_WITHDRAWAL_PATH, PASSWORD_UPDATE_PATH, SIGN_IN_PATH, SIGN_UP_PATH, USER_FOUND_PATH, USER_UPDATE_PATH } from 'constant';
import SignUp from 'views/Authentication/Sign-Up';
import SignIn from 'views/Authentication/Sign-In';
import UserUpdate from 'views/User/UserUpdate';
import PasswordUpdate from 'views/User/PasswordUpdate';
import MembershipWithdrawal from 'views/Membership/MembershipWithdrawal';
import UserFound from 'views/Membership/UserFound';

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH} element={<Main />} />
        <Route path={SIGN_IN_PATH} element = {<SignIn />}/>
        <Route path={SIGN_UP_PATH} element = {<SignUp />} />
        <Route path={USER_FOUND_PATH} element={<UserFound />}/>
        <Route path={USER_UPDATE_PATH} element = {<UserUpdate />}/>
        <Route path={PASSWORD_UPDATE_PATH} element = {<PasswordUpdate />}/>
        <Route path={MEMBERSHIP_WITHDRAWAL_PATH} element = {<MembershipWithdrawal />}/>
        
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </ Route>
    </Routes>
  );
}

export default App;