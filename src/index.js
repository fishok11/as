import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main.js'
import { GroupProvider } from './context/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GroupProvider>
    <Main /> 
  </GroupProvider>
);