import { useContext } from "react";
import { GroupContext } from "../context/main";
import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import YourGift from "./YourGift";
import Congradulations from "./Congradulations";
import ReturnToEdit from "./ReturnToEdit";


const Group = () => {
  const [state, dispatch] = useContext(GroupContext);
  const step = state.step
  const groupEdit = state.group.edit
  const eventDateEdit = state.eventDate.edit
  const groupOwnerEdit = state.groupOwner.edit
  const yourGiftEdit = state.yourGift.edit

  return (
    <div className="g-container">
      <ReturnToEdit/>
      {step >= 1 && (<GroupName/>)}
      {step >= 2 && (<EventDate/>)}
      {step >= 3 && (<GroupOwner/>)}
      {step >= 4 && (<YourGift/>)}
      {
        step >= 5 &&
        groupEdit === false &&
        eventDateEdit === false &&
        groupOwnerEdit === false &&
        yourGiftEdit === false && (
          <Congradulations/>
        )
      }
    </div>
  )
};

export default Group;