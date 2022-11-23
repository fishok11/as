import { useContext } from "react";
import { GroupContext } from "../context/main";
import { Routes, Route } from "react-router-dom";
import GroupUser from "./GroupUser";
import GroupAdmin from "./GroupAdmin";

const Group = () => {
  const [state, dispatch] = useContext(GroupContext);
  
  return (
    <>
      <Routes>
        <Route index element={<GroupAdmin />}/>
        <Route path={`/group-user/:id`} element={<GroupUser />}/>
        <Route path={`/group-user/:id`} element={<GroupUser />}/>
      </Routes>
    </>
  )
};

export default Group;