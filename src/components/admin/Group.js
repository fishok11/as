import { Routes, Route } from "react-router-dom";
import User from "../user/User";
import GroupAdmin from "./GroupAdmin";
import UserProfile from "../user/UserProfile";

const Group = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path={`/group/:id`} element={<User />}/>
        <Route path={`/group/:id/user-profile/:userId`} element={<UserProfile />}/>
      </Routes>
    </>
  )
};

export default Group;