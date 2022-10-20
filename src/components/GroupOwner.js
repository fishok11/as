import { useContext, useState } from "react";
import { GroupContext } from "../context/main";

const GroupOwner = () => {
  const [state, dispatch] = useContext(GroupContext)
	const [groupOwnerName, setOwnerName] = useState(state.groupOwner.name)
	const [groupOwnerEmail, setOwnerEmail] = useState(state.groupOwner.email)

	if (state.groupOwner.edit) {
		return (
			<>
				<div>
					<div className="GroupOwner--item">
						<input 
							className="g-input" 
							placeholder="Введите ваше имя"
							value={groupOwnerName}
							onChange={event => setOwnerName(event.target.value)}
						></input>
						{state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>
					<div className="GroupOwner--item" >
						<input 
							className="g-input" 
							placeholder="Введите ваш email"
							value={groupOwnerEmail}
							onChange={event => setOwnerEmail(event.target.value)}
						></input>
						{state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>
					<button 
						className="g-button"
						onClick={() => dispatch({type: "CREATE_GROUP_OWNER", payload: {
							groupOwner: {
								name: groupOwnerName, 
								email: groupOwnerEmail
							}}})
						}
					>
						OK
					</button>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div 
					className="g-link"
					onClick={() => dispatch({type: "RETURN_CREATE_GROUP_OWNER"})}
				>
					Ваши данные
				</div>
			</>
		)
	}
};

export default GroupOwner;