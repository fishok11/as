import { useContext } from "react";
import { GroupContext } from "../context/main";
import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import YourGift from "./YourGift";
import Congradulations from "./Congradulations";
import ReturnToEdit from "./ReturnToEdit";
import GroupData from "./GroupData";

const Group = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <>
      <GroupData/>
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
            <Congradulations/>
          )
        }
      </div>
    </>
  )
};

export default Group;