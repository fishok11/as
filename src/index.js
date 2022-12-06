import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { reducer } from './store';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import Group from './components/Group';
import './index.css';

const store = configureStore({reducer}, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Group/>
    </Provider>
  </BrowserRouter>
);