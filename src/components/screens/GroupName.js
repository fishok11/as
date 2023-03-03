import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupName } from "../../store/actions/actions"
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

const GroupName = ({groupId, profile, groupDB}) => {
  const state = useSelector(state => state.group)
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState(profile === true ? groupDB.name : state.group.name)
  let group = {
    name: groupName,
    eventDate: {
      budget: profile === true ? groupDB.eventDate.budget : state.eventDate.budget,
      registrationDate: profile === true ? groupDB.eventDate.registrationDate : state.eventDate.registrationDate,
      drawDate: profile === true ? groupDB.eventDate.drawDate : state.eventDate.drawDate,
      exchangeDate: profile === true ? groupDB.eventDate.exchangeDate : state.eventDate.exchangeDate,
    },
  }

  return ( 
    <div className="g-container__form" data-testId="group-name">
      <Typography variant="h6">Название вашей группы</Typography>
      
      <GlobalInput 
        testId="group-name-input"
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
            groupId: groupId,
            profile: profile,
          })) 
        )}
      />
    </div>
  );
}

export default GroupName;