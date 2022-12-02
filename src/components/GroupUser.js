import GroupUserData from "./GroupUserData";
import GroupUserForm from "./GroupUserForm";
import GroupUserDone from "./GroupUserDone";
import { useSelector } from "react-redux";

const GroupUser = () => {
  const state = useSelector(state => state.user)

  return (
    <>
      <GroupUserData />
      {state.step === 1 && (
        <GroupUserForm />
      )}
      {state.step === 2 && (
        <GroupUserDone />
      )}
    </>
  )
};

export default GroupUser