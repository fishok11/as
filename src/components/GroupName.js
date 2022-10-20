import { useContext, useState } from "react";
import { GroupContext } from "../context/main";


const GroupName = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [groupNameInput, setGroupName] = useState(state.group.name)

  if (state.group.edit) {
    return ( 
      <div className="Main">
        <div>
          <h1>Введите название вашей группы</h1>
          <input
            className="g-input"
            placeholder=""
            value={groupNameInput}
            onChange={event => setGroupName(event.target.value)}
          ></input>
          {state.group.error === true && (<div className="g-error">Название группы не может быть пустым!</div>)}
  
          <button
            className="g-button"
            onClick={() => dispatch({type: "GROUP_CREATED", payload:{
              group: {
                name: groupNameInput
              }}})
            }
          >
            OK
          </button>
        </div>
      </div>
    );
  } else {
    return (  
      <>
        <div 
          className="g-link"
          onClick={() => dispatch({type: "RETURN_CREATE_GROUP_NAME"})}
        >
          {state.group.name}
        </div>
      </>
    )
  }
};

export default GroupName;