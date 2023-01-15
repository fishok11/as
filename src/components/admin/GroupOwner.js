import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupOwner } from "../../store/actions/actions"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '../Input'

const GroupOwner = () => {
	const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
	const [groupOwnerName, setOwnerName] = useState(state.groupOwner.name)
	const [groupOwnerEmail, setOwnerEmail] = useState(state.groupOwner.email)
	let group = {
    name: state.group.name,
    eventDate: {
      budget: state.eventDate.budget,
      registrationDate: state.eventDate.registrationDate,
      drawDate: state.eventDate.drawDate,
      exchangeDate: state.eventDate.exchangeDate,
    },
    groupOwner: {
      name: groupOwnerName,
      email: groupOwnerEmail,
    },
    yourGift: {
      age: state.yourGift.age,
      gender: state.yourGift.gender,
      wishes: state.yourGift.wishes,
    },
  };

	if (state.groupOwner.edit) {
		return (
			<div className="g-container__form">
				<Typography variant="h6">Ваши данные</Typography>

				<Input 
					label="Введите ваше имя" 
					error={state.groupOwner.error === true}
					value={groupOwnerName}
					onChange={event => setOwnerName(event.target.value)}
				></Input>

				<Input 
					label="Введите ваш email" 
					error={state.groupOwner.error === true}
					value={groupOwnerEmail}
					onChange={event => setOwnerEmail(event.target.value)}
				></Input>

				<Button variant="contained"
					className="g-button"
					onClick={() => (
						dispatch(saveGroupOwner({
							group,
							groupId: state.group.id,
						})) 
					)}
				>
					OK
				</Button>
			</div>
		)
	}
};

export default GroupOwner;
