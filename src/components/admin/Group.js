import { Routes, Route } from "react-router-dom";
import GroupUser from "../user/GroupUser";
import GroupAdmin from "./GroupAdmin";

const Group = () => {
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path={`/group-user/:id`} element={<GroupUser />}/>
      </Routes>
    </>
  )
};

export default Group;