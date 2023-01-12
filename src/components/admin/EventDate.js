import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEventDate, createEventDate } from "../../store/actions/actions"
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Typography from '@mui/material/Typography';
import Input from '../Input'

const EventDate = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [budget, setBudget] = useState(state.eventDate.budget)
  const [registrationDate, setRegistrationDate] = useState(dayjs().format('DD/MM/YYYY'))
  const [drawDate, setDrawDate] = useState(dayjs().format('DD/MM/YYYY'))
  const [exchangeDate, setExchangeDate] = useState(dayjs().format('DD/MM/YYYY'))
  let group = {
    name: state.group.name,
    eventDate: {
      budget: budget,
      registrationDate: registrationDate,
      drawDate: drawDate,
      exchangeDate: exchangeDate,
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
  const isUpdate = Boolean(state.group.id);

  if (state.eventDate.edit) {
    return (
      <div className="g-container__form">
        <Typography variant="h6">Регистрация участников</Typography>
        
        <Input 
          label="Бюджет" 
          error={state.eventDate.error === true}
          value={budget}
          onChange={event => setBudget(event.target.value)}
        ></Input>

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
  
        <Button variant="contained"
          className="g-button"
          onClick={() => (
            isUpdate === true
            ? dispatch(saveEventDate({
                group,
                groupId: state.group.id,
              })) 
            : dispatch(createEventDate({
              eventDate: {
                budget: budget, 
                registrationDate: dayjs(registrationDate).format('DD/MM/YYYY'), 
                drawDate: dayjs(drawDate).format('DD/MM/YYYY'), 
                exchangeDate: dayjs(exchangeDate).format('DD/MM/YYYY'),
              },
              groupId: state.group.id,
            })
          ))}
        >
          OK
        </Button>
      </div>
    )
  }
};

export default EventDate;