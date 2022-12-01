import GroupUserData from "./GroupUserData";
import GroupUserForm from "./GroupUserForm";
import GroupUserDone from "./GroupUserDone";
import { useSelector } from "react-redux";

const GroupUser = () => {
  const state = useSelector(state => state)

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