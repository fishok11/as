import { useContext } from "react";
import { GroupContext } from "../context/main";
import Step from "./Step";

const ReturnToEdit = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div className="ReturnToEdit-container">
      <Step number="1" action="RETURN_CREATE_GROUP_NAME"/>
      <Step number="2" action="RETURN_CREATE_EVENT_DATE"/>
      <Step number="3" action="RETURN_CREATE_GROUP_OWNER"/>
      <Step number="4" action="RETURN_CREATE_YOUR_GIFT"/>
    </div>
  )
}

export default ReturnToEdit;