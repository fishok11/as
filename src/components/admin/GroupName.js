import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupName } from "../../store/actions/actions"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '../Input'

const GroupName = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState(state.group.name)
  let group = {
    name: groupName,
    eventDate: {
      budget: state.eventDate.budget,
      registrationDate: state.eventDate.registrationDate,
      drawDate: state.eventDate.drawDate,
      exchangeDate: state.eventDate.exchangeDate,
    },
    groupOwner: {
      name: state.groupOwner.name,
      email: state.groupOwner.email,
    },
    yourGift: {
      age: state.yourGift.age,
      gender: state.yourGift.gender,
      wishes: state.yourGift.wishes,
    },
  };

  return ( 
    <div className="g-container__form">
      <Typography variant="h6">Название вашей группы</Typography>
      
      <Input 
        label="Введите название вашей группы" 
        error={state.group.error === true}
        value={groupName}
        onChange={event => setGroupName(event.target.value)}
      ></Input>

      <Button 
        variant="contained"
        className="g-button"
        onClick={() => (
          dispatch(saveGroupName({
            group ,
            groupId: state.group.id,
          })) 
        )}
      >
        <Typography variant="button" display="block">OK</Typography>
      </Button>
    </div>
  );
};

export default GroupName;