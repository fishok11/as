import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import GlobalButton from "../navigation/GlobalButton";

const UserGift = ({admin, userId, profile, userDB}) => {
  const state = useSelector(state => state.group)
  const dispatch = useDispatch()
  const [userAge, setUserAge] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userWishes, setUserWishes] = useState(state.userGift.wishes)
  const allAge = [5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
  const {id} = useParams();
  const getId = Number(admin === true ? state.group.id : id);
  let user = {
    groupId: Number(profile === true ? id : getId),
    userData:{
      name: profile === true ? userDB.userData.name : state.userData.name,
      email: profile === true ? userDB.userData.email : state.userData.email,
    },
    userGift: {
      age: userAge,
      gender: userGender,
      wishes: userWishes,
    },
    admin: admin,
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
            label="Ваш возраст"
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
          <FormLabel id="demo-radio-buttons-group-label">Ваш пол</FormLabel>
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
        />

        <GlobalButton 
          text={"OK"}
          onClick={() => dispatch(saveUserGift({
            user,
            userId: userId,
            profile: profile,
          }))}
        />
      </div>
    </>
  )
};

export default UserGift;