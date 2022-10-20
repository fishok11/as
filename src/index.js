import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GroupProvider } from './context/main';
import Group from './components/Group';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GroupProvider>
    <Group/>
  </GroupProvider>
);