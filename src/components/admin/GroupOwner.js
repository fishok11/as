import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupOwner } from "../../store/actions/actions"
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

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

	return (
		<div className="g-container__form">
			<Typography variant="h6">Ваши данные</Typography>

			<GlobalInput 
				label="Введите ваше имя" 
				error={state.groupOwner.error === true}
				value={groupOwnerName}
				onChange={event => setOwnerName(event.target.value)}
			></GlobalInput>

			<GlobalInput 
				label="Введите ваш email" 
				error={state.groupOwner.error === true}
				value={groupOwnerEmail}
				onChange={event => setOwnerEmail(event.target.value)}
			></GlobalInput>

			<GlobalButton 
        text={"OK"}
				onClick={() => (
					dispatch(saveGroupOwner({
						group,
						groupId: state.group.id,
					})) 
				)}
			></GlobalButton>
		</div>
	)
};

export default GroupOwner;
