import { useContext } from "react";
import { GroupContext } from "../context/main";
import GroupNameLink from "./GroupNameLink";
import EventDateLink from "./EventDateLink";
import GroupOwnerLink from "./GroupOwnerLink";
import YourGiftLink from "./YourGiftLink";

const ReturnToEdit = () => {
  const [state, dispatch] = useContext(GroupContext);
  return (
    <div className="ReturnToEdit-container">
      <GroupNameLink/>
      <EventDateLink/>
      <GroupOwnerLink/>
      <YourGiftLink/>
    </div>
  )
}

export default ReturnToEdit;