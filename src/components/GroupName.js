import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const GroupName = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [groupNameInput, setGroupName] = useState(state.group.name)

  if (state.group.edit) {
    return ( 
      <div>
        <h2>Название вашей группы</h2>
        
        <input
          className="g-input"
          placeholder="Введите название вашей группы"
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
    );
  }
};

export default GroupName;