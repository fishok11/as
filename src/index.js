import React from 'react';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { reducer } from './store';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import './index.css';
import User from "./components/user/User";
import Group from "./components/admin/Group";
import UserProfile from "./components/user/UserProfile";

const store = configureStore({reducer}, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route index element={<Group />}/>
        <Route path={`/group/:id`} element={<User />}/>
        <Route path={`/group/:id/user-profile/:userId`} element={<UserProfile />}/>
      </Routes>
    </Provider>
  </BrowserRouter>
);