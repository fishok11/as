import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAdminData } from "../../store/actions/actions"
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

const GroupOwner = () => {
	const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
	const [groupOwnerName, setOwnerName] = useState(state.userData.name)
	const [groupOwnerEmail, setOwnerEmail] = useState(state.userData.email)
	let user = {
		groupId: Number(state.group.id),
    userData: {
      name: groupOwnerName,
      email: groupOwnerEmail,
    },
    userGift: {
      age: state.userGift.age,
      gender: state.userGift.gender,
      wishes: state.userGift.wishes,
    },
		admin: true,
  };

	return (
		<div className="g-container__form">
			<Typography variant="h6">Ваши данные</Typography>

			<GlobalInput 
				label="Введите ваше имя" 
				error={state.userData.error === true}
				value={groupOwnerName}
				onChange={event => setOwnerName(event.target.value)}
			></GlobalInput>

			<GlobalInput 
				label="Введите ваш email" 
				error={state.userData.error === true}
				value={groupOwnerEmail}
				onChange={event => setOwnerEmail(event.target.value)}
			></GlobalInput>

			<GlobalButton 
        text={"OK"}
				onClick={() => (
					dispatch(saveAdminData({
						user,
						userId: state.userData.id,
					})) 
				)}
			></GlobalButton>
		</div>
	)
};

export default GroupOwner;
