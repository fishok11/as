import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupNameLink = () => {
  const [state, dispatch] = useContext(GroupContext);

  if (state.group.edit === true) {
    return (
      <div 
        className="g-link-edit"
        onClick={() => dispatch({type: "RETURN_CREATE_GROUP_NAME"})}
      >
        1
      </div>
    )
  } else {
    return (
      <div 
        className="g-link"
        onClick={() => dispatch({type: "RETURN_CREATE_GROUP_NAME"})}
      >
        1
      </div>
    )
  }
};

export default GroupNameLink;