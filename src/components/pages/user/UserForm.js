import UserDone from "./UserDone";
import { useSelector } from "react-redux";
import UserGift from "../../screens/UserGift";
import UserData from "../../screens/UserData";
import EditUser from "../../navigation/EditUser";

const UserForm = () => {
  const state = useSelector(state => state.group);
  
  return (
    <div className="Group-container">
      <EditUser />
      {(state.userStep === 1 || state.userData.edit === true) && (<UserData admin={false} userId={state.userData.id} profile={false} />)}
      {(state.userStep >= 2 && state.userGift.edit === true) && (<UserGift admin={false} userId={state.userData.id} profile={false} />)}
      {
        state.userStep >= 3 && 
        state.userData.edit === false && 
        state.userGift.edit === false && (
          <UserDone />
        )
      }
    </div>
  )
}

export default UserForm;