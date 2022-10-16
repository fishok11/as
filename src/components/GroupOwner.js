import { useContext, useState } from "react";
import { GroupContext } from "../context/main";

const GroupOwner = () => {
  const [state, dispatch] = useContext(GroupContext)
	const [groupOwnerName, setOwnerName] = useState("")
	const [groupOwnerEmail, setOwnerEmail] = useState("")
  
  return (
		<>
			{state.groupOwner.showGroupOwner === true && state.eventDate.showEventDate === false && (
				<div>
					<div className="GroupOwner--item">
						<input 
							className="g-input" 
							placeholder="Введите ваше имя"
							value={groupOwnerName}
							onChange={event => setOwnerName(event.target.value)}
						></input>
						{state.groupOwner.groupOwnerError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>
					<div className="GroupOwner--item" >
						<input 
							className="g-input" 
							placeholder="Введите ваш email"
							value={groupOwnerEmail}
							onChange={event => setOwnerEmail(event.target.value)}
						></input>
						{state.groupOwner.groupOwnerError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>
					<button 
						className="g-button"
						onClick={() => dispatch({type: "SAVE_GROUP_OWNER", payload: {
							groupOwner: {
								groupOwnerName: groupOwnerName, 
								groupOwnerEmail: groupOwnerEmail
							}}})}
					>
						OK
					</button>
				</div>
			)}
		</>
  )
};

export default GroupOwner;