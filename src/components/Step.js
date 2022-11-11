import { useContext } from "react";
import { GroupContext } from "../context/main";

const Step = ({number, action, className}) => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div 
      className={className}
      onClick={() => dispatch({type: action})}
    >
      {number}
    </div>
  )
};

export default Step;