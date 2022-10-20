import { useContext} from "react";
import { GroupContext } from "../context/main";
import EventDate from "./EventDate"
import GroupOwner from "./GroupOwner"
import GroupName from "./GroupName"
import YourGift from "./YourGift";
import Congradulations from "./Congradulations";


const Group = () => {
  const [state, dispatch] = useContext(GroupContext);
  const step = state.step

  return (
    <div className="g-container">
      {step >= 1 && (<GroupName/>)}
      {step >= 2 && (<EventDate/>)}
      {step >= 3 && (<GroupOwner/>)}
      {step >= 4 && (<YourGift/>)}
      {step >= 5 && (<Congradulations/>)}
    </div>
  )
};

export default Group;