import { useContext } from "react";
import { GroupContext } from "../context/main";
import Step from "./Step";

const ReturnToEdit = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div className="ReturnToEdit-container">
      {state.group.edit === true && (<Step number="1" action="RETURN_CREATE_GROUP_NAME" className="g-link edit"/>)}
      {state.group.edit === false && (<Step number="1" action="RETURN_CREATE_GROUP_NAME" className="g-link"/>)}

      {state.eventDate.edit === true && (<Step number="2" action="RETURN_CREATE_EVENT_DATE" className="g-link edit"/>)}
      {state.eventDate.edit === false && (<Step number="2" action="RETURN_CREATE_EVENT_DATE" className="g-link"/>)}

      {state.groupOwner.edit === true && (<Step number="3" action="RETURN_CREATE_GROUP_OWNER" className="g-link edit"/>)}
      {state.groupOwner.edit === false && (<Step number="3" action="RETURN_CREATE_GROUP_OWNER" className="g-link"/>)}

      {state.yourGift.edit === true && (<Step number="4" action="RETURN_CREATE_YOUR_GIFT" className="g-link edit"/>)}
      {state.yourGift.edit === false && (<Step number="4" action="RETURN_CREATE_YOUR_GIFT" className="g-link"/>)}
    </div>
  )
}

export default ReturnToEdit;