import UserDone from "./UserDone";
import { useSelector } from "react-redux";
import UserGift from "./UserGift";
import UserData from "./UserData";
import EditUser from "./EditUser";

const UserForm = () => {
  const state = useSelector(state => state.user)

  return (
    <div className="Group-container">
      <EditUser />
      {(state.step >= 1 && state.userData.edit === true) && (<UserData />)}
      {(state.step >= 2 && state.userGift.edit === true) && (<UserGift />)}
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