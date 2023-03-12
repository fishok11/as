import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEventDate } from "../../store/actions/actions"
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

const GroupDates = ({groupId, profile, groupDb}) => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  
  const [budget, setBudget] = useState(profile === true ? groupDb.eventDate.budget : state.eventDate.budget);
  const [registrationDate, setRegistrationDate] = useState(dayjs(profile === true ? groupDb.eventDate.registrationDate : state.eventDate.registrationDate));
  const [drawDate, setDrawDate] = useState(dayjs(profile === true ? groupDb.eventDate.drawDate : state.eventDate.drawDate));
  const [exchangeDate, setExchangeDate] = useState(dayjs(profile === true ? groupDb.eventDate.exchangeDate : state.eventDate.exchangeDate));

  let group = {
    name: profile === true ? groupDb.name : state.group.name,
    eventDate: {
      budget: budget,
      registrationDate: dayjs(registrationDate).format('DD/MM/YYYY'),
      drawDate: dayjs(drawDate).format('DD/MM/YYYY'),
      exchangeDate: dayjs(exchangeDate).format('DD/MM/YYYY'),
    },
    recipients: profile === true ?  groupDb.recipients : {},
  }

  return (
    <div className="g-container__form" data-testid="group-date">
      <Typography variant="h6">Данные группы</Typography>
      
      <GlobalInput 
        testid="group-date-budget-input"
        label="Бюджет" 
        type="number"
        error={state.eventDate.error === true}
        value={budget}
        onChange={event => setBudget(event.target.value)}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth adapterLocale="ru">
        <Stack sx={{ width: '100%' }}>
          <DesktopDatePicker 
            label="Регистрация участников до"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" fullWidth margin="normal" {...params} error={state.eventDate.error === true}/>}
            value={registrationDate}
            onChange={newValue => setRegistrationDate(newValue)}
          />

          <DesktopDatePicker 
            label="Выбор получателей подарков"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" fullWidth margin="normal" {...params} error={state.eventDate.error === true}/>}
            value={drawDate}
            onChange={newValue => setDrawDate(newValue)}
          />
        
          <DesktopDatePicker 
            label="Обмен подарками"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" fullWidth margin="normal" {...params} error={state.eventDate.error === true}/>}
            value={exchangeDate}
            onChange={newValue => setExchangeDate(newValue)}
          />
        </Stack>
      </LocalizationProvider>

      <GlobalButton 
        text={"OK"}
        onClick={() => (
          dispatch(saveEventDate({
            group,
            groupId: groupId,
            profile: profile,
          })) 
        )}
      />
    </div>
  )
}

export default GroupDates;