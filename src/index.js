import React from 'react';
import ReactDOM from 'react-dom/client';
import { GroupProvider } from './context/main';
import { BrowserRouter } from 'react-router-dom'
import Group from './components/Group';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GroupProvider>
      <Group/>
    </GroupProvider>
  </BrowserRouter>
);