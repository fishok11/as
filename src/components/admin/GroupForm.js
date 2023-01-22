import GroupName from "./GroupName"
import GroupDates from "./GroupDates"
import UserData from "../createUser/UserData";
import UserGift from "../createUser/UserGift";
import GroupDone from "./GroupDone";
import EditGroup from "../navigation/EditGroup";
import { useSelector } from "react-redux";


const GroupForm = () => {
  const state = useSelector(state => state.admin)

  return (
    <div className="Group-container">
    <EditGroup/>
    {(state.step >= 1 && state.group.edit === true) && (<GroupName/>)}
    {(state.step >= 2 && state.eventDate.edit === true) && (<GroupDates/>)}
    {(state.step >= 3 && state.userData.edit === true) && (<UserData admin={true} />)}
    {(state.step >= 4 && state.userGift.edit === true) && (<UserGift admin={true} />)}
    {
      (state.step >= 5 &&
      state.group.edit === false &&
      state.eventDate.edit === false &&
      state.userData.edit === false &&
      state.userGift.edit === false) && (
        <GroupDone/>
      )
    }
  </div>
  )
};

export default GroupForm;