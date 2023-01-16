import UserDone from "./UserDone";
import { useSelector } from "react-redux";
import UserGift from "./UserGift";
import UserData from "./UserData";

const UserForm = () => {
  const state = useSelector(state => state.user)

  return (
    <>
      {state.step === 1 && (
        <UserData />
      )}
      {state.step === 2 && (
        <UserGift />
      )}
      {state.step === 3 && (
        <UserDone />
      )}
    </>
  )
};

export default UserForm;