import { useContext, useState } from "react";
import { GroupContext } from "../context/main";
import EventDate from "./EventDate";


const Main = () => {
  const [state, dispatch] = useContext(GroupContext);

  const [groupNameInput, setGroupName] = useState("")

  return (
    
  <div className="Main">
    <div>
      {state.showGroupNameLink === true && (    
        <>
          <div 
            className="g-link"
            onClick={() => dispatch({type: "RETURN_CREATE_GROUP_NAME"})}
          >
            {state.groupName}
          </div>
          
        </>
      )}
      {state.eventDate.showEventDateLink === true && (
        <>
          <div 
            className="g-link"
            onClick={() => dispatch({type: "RETURN_CREATE_EVENT_DATE"})}
          >
            Дата события
          </div>
        </>
      )}
      {state.groupOwner.showGroupOwnerLink === true && (
        <>
          <div 
            className="g-link"
            onClick={() => dispatch({type: "RETURN_GROUP_OWNER"})}
          >
            Админ
          </div>
        </>
      )}
    </div>

    {state.showGroupName === true && (
      <div>
        <h1>Введите название вашей группы</h1>
        <input
          className="g-input"
          placeholder=""
          value={groupNameInput}
          onChange={event => setGroupName(event.target.value)}
        ></input>
        {state.groupCreateError === true && (<div className="g-error">Название группы не может быть пустым!</div>)}

        <button
          className="g-button"
          onClick={() => dispatch({type: "GROUP_CREATED", payload: {groupName: groupNameInput}})}
        >
          OK
        </button>
      </div>
    )}

    <EventDate></EventDate>
  </div>
  );
};

export default Main;