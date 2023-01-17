import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroup } from "../../store/actions/actions"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GlobalButton from "../navigation/GlobalButton";

const YourGift = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [giftAge, setGiftAge] = useState(state.yourGift.age)
  const [giftGender, setGiftGender] = useState(state.yourGift.gender)
  const [giftWishes, setGiftWishes] = useState(state.yourGift.wishes)
  let group = {
    name: state.group.name,
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
      age: giftAge,
      gender: giftGender,
      wishes: giftWishes,
    },
  };
  const allAge = [5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]  

  if (state.errorFetch === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (state.groupCreating === true) {
    return (
      <p>Группа загружается...</p>
    )
  }; 
  return (
    <div className="g-container__form">
      <Typography variant="h6">Ваш подарок</Typography>
      
      <FormControl           
        margin="normal"
        fullWidth
        size="small"
        error={state.yourGift.error === true}
      >
        <InputLabel id="demo-select-small">Возраст получателя</InputLabel>
        <Select 
          labelId="demo-select-small"
          id="demo-select-small"
          label="Возраст получателя"
          value={giftAge}
          onChange={event => setGiftAge(event.target.value)}
          
        >
          {allAge.map(age => 
            <MenuItem key={age} value={age} >{age}</MenuItem> 
          )}
        </Select>
      </FormControl>
      
      <FormControl 
        fullWidth
        error={state.yourGift.error === true}
      >
        <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
        <RadioGroup 
          value={giftGender}
          onChange={event => setGiftGender(event.target.value)}
        >
          <FormControlLabel value="мужского" control={<Radio size="small" sx={{ my: "-5px", '& .MuiSvgIcon-root': { fontSize: 18 }}}/>} label="Мужской"/>
          <FormControlLabel value="женского" control={<Radio size="small" sx={{ my: "-5px", '& .MuiSvgIcon-root': { fontSize: 18 }}}/>} label="Женский" />
          <FormControlLabel value="другого" control={<Radio size="small" sx={{ my: "-5px", '& .MuiSvgIcon-root': { fontSize: 18 }}}/>} label="Другой"/>
        </RadioGroup>
      </FormControl>

      <TextField 
        id="outlined-multiline-static"
        label="Пожелания к подарку (не обязательно)"
        multiline
        rows={2}
        margin="normal"
        fullWidth
        value={giftWishes}
        onChange={event => setGiftWishes(event.target.value)}
      ></TextField>

      <GlobalButton 
        text={"OK"}
        onClick={() => dispatch(saveGroup({
          group,
          groupId: state.group.id,
        }))
        }
      ></GlobalButton>
    </div>
  )

};

export default YourGift;