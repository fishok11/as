import GroupName from "./GroupName"
import GroupDates from "./GroupDates"
import UserData from "../createUser/UserData";
import UserGift from "../createUser/UserGift";
import GroupDone from "./GroupDone";
import EditGroup from "../navigation/EditGroup";
import { useSelector } from "react-redux";


const GroupAdminForm = () => {
  const state = useSelector(state => state.admin)

  return (
    <div className="Group-container">
    <EditGroup/>
    {(state.step >= 1 && state.group.edit) && (<GroupName/>)}
    {(state.step >= 2 && state.eventDate.edit) && (<GroupDates/>)}
    {(state.step >= 3 && state.userData.edit) && (<UserData admin={true} state={state}/>)}
    {(state.step >= 4 && state.userGift.edit) && (<UserGift admin={true} state={state}/>)}
    {
      state.step >= 5 &&
      state.group.edit === false &&
      state.eventDate.edit === false &&
      state.userData.edit === false &&
      state.userGift.edit === false && (
        <GroupDone/>
      )
    }
  </div>
  )
};

export default GroupAdminForm;