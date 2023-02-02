import UserDone from "./UserDone";
import { useDispatch, useSelector } from "react-redux";
import UserGift from "../forms/UserGift";
import UserData from "../forms/UserData";
import EditUser from "../navigation/EditUser";
import { useEffect } from "react";
import { resetState } from "../../store/actions/actions";

const UserForm = () => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState())
  }, [dispatch]);
  
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
};

export default UserForm;