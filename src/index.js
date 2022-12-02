import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './store';
import { BrowserRouter } from 'react-router-dom'
import Group from './components/Group';
import './index.css';

const store = configureStore({reducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Group/>
    </Provider>
  </BrowserRouter>
);