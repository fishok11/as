import { useContext, useState } from "react";
import { GroupContext } from "../context/main";

const GroupOwner = () => {
  const [state, dispatch] = useContext(GroupContext)

	const [groupOwnerName, setOwnerName] = useState("")
	
	const [groupOwnerEmail, setOwnerEmail] = useState("")
  
  return (
    <div className="group-owner--container">
			<div className="group-owner--item">
				<input 
					className="group-owner--item-input" 
					placeholder="Введите ваше имя"
					value={groupOwnerName}
					onChange={event => setOwnerName(event.target.value)}
				></input>
				{state.groupOwnerError === true &&(<div className="main-error">Название группы не может быть пустым!</div>)}
			</div>
			<div className="group-owner--item" >
				<input 
					className="group-owner--item-input" 
					placeholder="Введите ваш email"
					value={groupOwnerEmail}
					onChange={event => setOwnerEmail(event.target.value)}
				></input>
				{state.groupOwnerError === true &&(<div className="main-error">Название группы не может быть пустым!</div>)}
			</div>
      <button 
      	className="group-owner--button"
				onClick={() => dispatch({type: "SAVE_GROUP_OWNER", payload: {groupOwner: {groupOwnerName: groupOwnerName, groupOwnerEmail: groupOwnerEmail}}})}
      >
        OK
      </button>
    </div>
  )
};

export default GroupOwner;