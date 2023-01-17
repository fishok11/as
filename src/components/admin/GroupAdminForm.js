import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import YourGift from "./YourGift";
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
    {(state.step >= 3 && state.groupOwner.edit) && (<GroupOwner/>)}
    {(state.step >= 4 && state.yourGift.edit) && (<YourGift/>)}
    {
      state.step >= 5 &&
      state.group.edit === false &&
      state.eventDate.edit === false &&
      state.groupOwner.edit === false &&
      state.yourGift.edit === false && (
        <GroupDone/>
      )
    }
  </div>
  )
};

export default GroupAdminForm;