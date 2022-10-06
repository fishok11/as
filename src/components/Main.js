import { useContext, useState } from "react";
import { GroupContext } from "../context/main";
import GroupCreated from "./GroupCreated"

const Main = () => {
  const [state, dispatch] = useContext(GroupContext);

  const [groupNameInput, setGroupName] = useState("")

  return (
  <div className="main">
    {state.showGroupCreated === false && (
    <div>
      <input
        className="main-input"
        placeholder="Введите название вашей группы"
        value={groupNameInput}
        onChange={event => setGroupName(event.target.value)}
      ></input>
      <button
        className="main-button"
        onClick={() => dispatch({type: "GROUP_CREATED", payload: {groupName: groupNameInput}})}
      >
        OK
      </button>
    </div>)}
    {state.groupCreateError === true && (<div className="main-error">Название группы не может быть пустым!</div>)}

    {!state.showGroupCreated === false && (<GroupCreated/>)}
  </div>
  );
};

export default Main;