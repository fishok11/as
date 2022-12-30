import UserData from "./UserData";
import UserForm from "./UserForm";
import UserDone from "./UserDone";
import { useSelector } from "react-redux";

const User = () => {
  const state = useSelector(state => state.user)

  return (
    <>
      <UserData />
      {state.step === 1 && (
        <UserForm />
      )}
      {state.step === 2 && (
        <UserDone />
      )}
    </>
  )
};

export default User;