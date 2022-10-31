import { useContext } from "react";
import { GroupContext } from "../context/main";

const YourGiftLink = () => {
  const [state, dispatch] = useContext(GroupContext);

  if (state.yourGift.edit === true) {
    return (
      <div 
          className="g-link-edit"
          onClick={() => dispatch({type: "RETURN_CREATE_YOUR_GIFT"})}
        >
          4
      </div>
    )
  } else {
    return (
      <div 
          className="g-link"
          onClick={() => dispatch({type: "RETURN_CREATE_YOUR_GIFT"})}
        >
          4
      </div>
    )
  }
};

export default YourGiftLink;