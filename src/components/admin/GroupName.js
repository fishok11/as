import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupName } from "../../store/actions/actions"
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

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
  };

  return ( 
    <div className="g-container__form">
      <Typography variant="h6">Название вашей группы</Typography>
      
      <GlobalInput 
        label="Введите название вашей группы" 
        error={state.group.error === true}
        value={groupName}
        onChange={event => setGroupName(event.target.value)}
      />

      <GlobalButton 
        text={"OK"}
        onClick={() => (
          dispatch(saveGroupName({
            group ,
            groupId: state.group.id,
          })) 
        )}
      />
    </div>
  );
};

export default GroupName;