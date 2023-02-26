import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import User from "./components/pages/user/User";
import Group from "./components/pages/group/Group";
import UserProfile from "./components/pages/user/UserProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Group />}/>
        <Route path={`/group/:groupId`} element={<User />}/>
        <Route path={`/group/:groupId/user-profile/:userId`} element={<UserProfile />}/>
      </Routes>
      <Toaster position="bottom-center"/>
    </>
  )
}

export default App;