import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupOwner, createGroupOwner } from "../../store/actions/actions"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
  const isUpdate = Boolean(state.group.id);

	if (state.groupOwner.edit) {
		return (
			<div className="g-container__form">
				<Typography variant="h6">Ваши данные</Typography>

				<TextField 
					id="outlined-size-small" 
					label="Введите ваше имя" 
					variant="outlined"
					size="small"
					error={state.groupOwner.error === true}
					margin="normal"
					fullWidth
					value={groupOwnerName}
					onChange={event => setOwnerName(event.target.value)}
				></TextField>

				<TextField 
					id="outlined-size-small" 
					label="Введите ваш email" 
					variant="outlined"
					size="small"
					error={state.groupOwner.error === true}
					margin="normal"
					fullWidth
					value={groupOwnerEmail}
					onChange={event => setOwnerEmail(event.target.value)}
				></TextField>

				<Button variant="contained"
					className="g-button"
					onClick={() => (
						isUpdate === true
						? dispatch(saveGroupOwner({
							group,
							groupId: state.group.id,
						})) 
						: dispatch(createGroupOwner({
							groupOwner: {
								name: groupOwnerName, 
								email: groupOwnerEmail
							},
						})
					))}
				>
					OK
				</Button>
			</div>
		)
	}
};

export default GroupOwner;
