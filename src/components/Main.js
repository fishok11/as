import { useContext, useState } from "react";
import { GroupContext } from "../context/main";
import GroupCreated from "./GroupCreated"

const Main = () => {
  const [groupState, dispatch] = useContext(GroupContext);

  const [groupName, setGroupName] = useState("")

  return (
  <div className="main">
  {(<div>
      <input 
        className="main-input" 
        placeholder="Введите название вашей группы" 
        value={groupName}
        onChange={event => setGroupName(event.target.value)}
      ></input>
      <button 
        className="main-button"
        onClick={() => dispatch({type: "GROUP_CREATED"})}
      >
        OK
      </button>
    </div>)}
    
    {!groupState.showGroupCreated === false && groupName !== "" &&(<GroupCreated groupName={groupName}/>)}
  </div>
  );
};

export default Main;