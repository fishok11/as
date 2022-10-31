import { useContext } from "react";
import { GroupContext } from "../context/main";

const EventDateLink = () => {
  const [state, dispatch] = useContext(GroupContext);

  if (state.eventDate.edit === true) {
    return (
      <div 
        className="g-link-edit"
        onClick={() => dispatch({type: "RETURN_CREATE_EVENT_DATE"})}
      >
        2
      </div>
    )
  } else {
    return (
      <div 
        className="g-link"
        onClick={() => dispatch({type: "RETURN_CREATE_EVENT_DATE"})}
      >
        2
      </div>
    )
  }
};

export default EventDateLink;