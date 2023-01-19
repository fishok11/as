import UserDone from "./UserDone";
import { useSelector } from "react-redux";
import UserGift from "../createUser/UserGift";
import UserData from "../createUser/UserData";
import EditUser from "../navigation/EditUser";

const UserForm = () => {
  const state = useSelector(state => state.user)

  return (
    <div className="Group-container">
      <EditUser />
      {(state.step >= 1 && state.userData.edit === true) && (<UserData admin={false} state={state}/>)}
      {(state.step >= 2 && state.userGift.edit === true) && (<UserGift admin={false} state={state}/>)}
      {
        state.step >= 3 && 
        state.userData.edit === false && 
        state.userGift.edit === false && (
          <UserDone />
        )
      }
    </div>
  )
};

export default UserForm;