import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
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
import { saveUserGift } from "../../store/actions/actions";

const UserGift = () => {
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [userAge, setUserAge] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userWishes, setUserWishes] = useState(state.userGift.wishes)
  const allAge = [5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
  const {id} = useParams();
  let user = {
    groupId: Number(id),
    userData:{
      name: state.userData.name,
      email: state.userData.email,
    },
    userGift: {
      age: userAge,
      gender: userGender,
      wishes: userWishes,
    },
  }; 

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
    <>
      <div className="g-container__form">
        <Typography variant="h6">Ваш подарок</Typography>
        
        <FormControl           
          margin="normal"
          fullWidth
          size="small"
          error={state.userGift.error === true}
        >
          <InputLabel id="demo-select-small">Возраст получателя</InputLabel>
          <Select 
            labelId="demo-select-small"
            id="demo-select-small"
            label="Возраст получателя"
            value={userAge}
            onChange={event => setUserAge(event.target.value)}
          >
            {allAge.map(age => 
              <MenuItem key={age} value={age} >{age}</MenuItem> 
            )}
          </Select>
        </FormControl>
        
        <FormControl 
          fullWidth
          error={state.userGift.error === true}
        >
          <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
          <RadioGroup 
            value={userGender}
            onChange={event => setUserGender(event.target.value)}
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
          value={userWishes}
          onChange={event => setUserWishes(event.target.value)}
        ></TextField>

        <Button variant="contained"
          className="g-button"
          onClick={() => dispatch(saveUserGift({
            user,
            userId: state.userData.id,
          }))}
        >
          OK
        </Button>
      </div>
    </>
  )
};

export default UserGift;