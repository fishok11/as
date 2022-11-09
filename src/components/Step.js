import { useContext } from "react";
import { GroupContext } from "../context/main";

const Step = ({number, action}) => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div 
      className="g-link" 
      onClick={() => dispatch({type: action})}
    >
      {number}
    </div>
  )
};

export default Step;