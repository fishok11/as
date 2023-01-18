import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import AdminGift from "./AdminGift";
import GroupDone from "./GroupDone";
import EditGroup from "./EditGroup";
import { useSelector } from "react-redux";

const GroupAdminForm = () => {
  const state = useSelector(state => state.admin)

  return (
    <div className="Group-container">
    <EditGroup/>
    {(state.step >= 1 && state.group.edit) && (<GroupName/>)}
    {(state.step >= 2 && state.eventDate.edit) && (<EventDate/>)}
    {(state.step >= 3 && state.userData.edit) && (<GroupOwner/>)}
    {(state.step >= 4 && state.userGift.edit) && (<AdminGift/>)}
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