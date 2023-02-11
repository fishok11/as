import GroupName from "../../forms/GroupName"
import GroupDates from "../../forms/GroupDates"
import UserData from "../../forms/UserData";
import UserGift from "../../forms/UserGift";
import GroupDone from "./GroupDone";
import EditGroup from "../../navigation/EditGroup";
import { useSelector } from "react-redux";


const GroupForm = () => {
  const state = useSelector(state => state.group)

  return (
    <div className="Group-container">
    <EditGroup/>
    {(state.step >= 1 && state.group.edit === true) && (<GroupName id={state.group.id} profile={false} />)}
    {(state.step >= 2 && state.eventDate.edit === true) && (<GroupDates id={state.group.id} profile={false} />)}
    {(state.step >= 3 && state.userData.edit === true) && (<UserData admin={true} userId={state.userData.id} profile={false} />)}
    {(state.step >= 4 && state.userGift.edit === true) && (<UserGift admin={true} userId={state.userData.id} profile={false} />)}
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