import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupName, createGroupName } from "../../store/actions/actions"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
  const isUpdate = Boolean(state.group.id);

  if (state.group.edit) {
    return ( 
      <div className="g-container__form">
        <Typography variant="h6">Название вашей группы</Typography>
        
        <TextField 
          id="outlined-size-small" 
          label="Введите название вашей группы" 
          variant="outlined"
          size="small"
          error={state.group.error === true}
          margin="normal"
          fullWidth
          value={groupName}
          onChange={event => setGroupName(event.target.value)}
        ></TextField>

        <Button 
          variant="contained"
          className="g-button"
          onClick={() => (
            isUpdate === true
              ? dispatch(saveGroupName({
                  group ,
                  groupId: state.group.id,
                })) 
              : dispatch(createGroupName({
                group: {
                  name: groupName
                },
            }))
          )}
        >
         <Typography variant="button" display="block">OK</Typography>
        </Button>
      </div>
    );
  };
};

export default GroupName;