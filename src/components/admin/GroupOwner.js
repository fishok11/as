import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGroupOwner } from "../../store/actions/actions"

const GroupOwner = () => {
	const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
	const [groupOwnerName, setOwnerName] = useState(state.groupOwner.name)
	const [groupOwnerEmail, setOwnerEmail] = useState(state.groupOwner.email)

	if (state.groupOwner.edit) {
		return (
			<div>
				<h2>Ваши данные</h2>
				<div>
					<div className="GroupOwner--item">
						<label>Ваше имя:
							<input 
								className="g-input" 
								placeholder="Введите ваше имя"
								value={groupOwnerName}
								onChange={event => setOwnerName(event.target.value)}
							></input>
						</label>
						{state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>

					<div className="GroupOwner--item">
						<label>Ваш email:
							<input 
								className="g-input" 
								placeholder="Введите ваш email"
								value={groupOwnerEmail}
								onChange={event => setOwnerEmail(event.target.value)}
							></input>
						</label>
						{state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
					</div>

					<button 
						className="g-button"
						onClick={() => dispatch(createGroupOwner({
							groupOwner: {
								name: groupOwnerName, 
								email: groupOwnerEmail
							}}))
						}
					>
						OK
					</button>
				</div>
			</div>
		)
	}
};

export default GroupOwner;
