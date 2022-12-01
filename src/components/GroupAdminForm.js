import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import YourGift from "./YourGift";
import GroupDone from "./GroupDone";
import ReturnToEdit from "./ReturnToEdit";
import { useSelector } from "react-redux";

const GroupAdminForm = () => {
  const state = useSelector(state => state)

  return (
    <div className="Group-container">
    <ReturnToEdit/>
    {state.step >= 1 && (<GroupName/>)}
    {state.step >= 2 && (<EventDate/>)}
    {state.step >= 3 && (<GroupOwner/>)}
    {state.step >= 4 && (<YourGift/>)}
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