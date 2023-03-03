import { useSelector } from "react-redux";
import GroupName from "../../screens/GroupName"
import GroupDates from "../../screens/GroupDates"
import UserData from "../../screens/UserData";
import UserGift from "../../screens/UserGift";
import GroupDone from "./GroupDone";
import EditGroup from "../../navigation/EditGroup";

const GroupForms = () => {
  const state = useSelector(state => state.group)

  return (
    <div className="Group-container">
      <EditGroup/>
      {(state.step >= 1 && state.group.edit === true) && (<GroupName groupId={state.group.id} profile={false} />)}
      {(state.step >= 2 && state.eventDate.edit === true) && (<GroupDates groupId={state.group.id} profile={false} />)}
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
}

export default GroupForms;