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

const EventDate = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [budget, setBudget] = useState(state.eventDate.budget)
  const [registrationDate, setRegistrationDate] = useState(dayjs())
  const [drawDate, setDrawDate] = useState(dayjs())
  const [exchangeDate, setExchangeDate] = useState(dayjs())
  let group = {
    name: state.group.name,
    eventDate: {
      budget: budget,
      registrationDate: dayjs(registrationDate).format('DD/MM/YYYY'),
      drawDate: dayjs(drawDate).format('DD/MM/YYYY'),
      exchangeDate: dayjs(exchangeDate).format('DD/MM/YYYY'),
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
  }

  return (
    <div className="g-container__form">
      <Typography variant="h6">Регистрация участников</Typography>
      
      <GlobalInput 
        label="Бюджет" 
        error={state.eventDate.error === true}
        value={budget}
        onChange={event => setBudget(event.target.value)}
      ></GlobalInput>

      <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth adapterLocale="ru">
        <Stack sx={{ width: '100%' }}>
          <DesktopDatePicker 
            label="Регистрация участников до"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" error={state.eventDate.error === true} fullWidth margin="normal" {...params} />}
            value={registrationDate}
            onChange={newValue => setRegistrationDate(newValue)}
          ></DesktopDatePicker>

          <DesktopDatePicker 
            label="Выбор получателей подарков до"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" error={state.eventDate.error === true} fullWidth margin="normal" {...params} />}
            value={drawDate}
            onChange={newValue => setDrawDate(newValue)}
          ></DesktopDatePicker>
        
          <DesktopDatePicker 
            label="Обмен подарками"
            disableMaskedInput
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => <TextField size="small" error={state.eventDate.error === true} fullWidth margin="normal" {...params} />}
            value={exchangeDate}
            onChange={newValue => setExchangeDate(newValue)}
          ></DesktopDatePicker>
        </Stack>
      </LocalizationProvider>

      <GlobalButton 
        text={"OK"}
        onClick={() => (
          dispatch(saveEventDate({
            group,
            groupId: state.group.id,
          })) 
        )}
      ></GlobalButton>
    </div>
  )
};

export default EventDate;