import { Routes, Route } from "react-router-dom";
import User from "../user/User";
import GroupAdmin from "./GroupAdmin";

const Group = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path={`/group-user/:id`} element={<User />}/>
      </Routes>
    </>
  )
};

export default Group;