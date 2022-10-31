import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupOwnerLink = () => {
  const [state, dispatch] = useContext(GroupContext);

  if (state.groupOwner.edit === true) {
    return (
      <div 
        className="g-link-edit"
        onClick={() => dispatch({type: "RETURN_CREATE_GROUP_OWNER"})}
      >
        3
			</div>
    )
  } else {
    return (
      <div 
        className="g-link"
        onClick={() => dispatch({type: "RETURN_CREATE_GROUP_OWNER"})}
      >
        3
			</div>
    )
  }
};

export default GroupOwnerLink;