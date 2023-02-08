import React from 'react';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { reducer } from './store';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import { Toaster } from 'react-hot-toast';
import './index.css';
import User from "./components/pages/user/User";
import Group from "./components/group/Group";
import UserProfile from "./components/pages/user/UserProfile";


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
    <Toaster position="bottom-center"/>
  </BrowserRouter>
);