import { useContext } from "react";
import { GroupContext } from "../context/main";
import GroupUserData from "./GroupUserData";
import GroupUserForm from "./GroupUserForm";
import GroupUserDone from "./GroupUserDone";

const GroupUser = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <>
      {state.user.step === 1 && (
        <>
          <GroupUserData />
          <GroupUserForm />
        </>
      )}
      {state.user.step === 2 && (
        <GroupUserDone />
      )}
    </>
  )
};

export default GroupUser