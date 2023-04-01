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

const UserGift = ({admin, userId, profile, userDb, recipientId}) => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  
  const {groupId} = useParams();

  const [userAge, setUserAge] = useState(profile === true ? userDb.userGift.age : state.userGift.age);
  const [userGender, setUserGender] = useState(profile === true ? userDb.userGift.gender : state.userGift.gender);
  const [userWishes, setUserWishes] = useState(profile === true ? userDb.userGift.wishes : state.userGift.wishes);

  let user = {
    groupId: profile === true || admin === false ? groupId : state.group.id,
    userData:{
      name: profile === true ? userDb.userData.name : state.userData.name,
      email: profile === true ? userDb.userData.email : state.userData.email,
    },
    userGift: {
      age: userAge,
      gender: userGender,
      wishes: userWishes,
    },
    admin: admin,
    recipientId:  profile === true ? recipientId : null,
  } 
  const allAge = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
 
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
          <InputLabel id="demo-select-small">Ваш возраст</InputLabel>
          <Select 
            labelId="demo-select-small"
            id="demo-select-small"
            label="Ваш возраст"
            value={userAge}
            onChange={event => setUserAge(event.target.value)}
          >
            {allAge.map(age => 
              <MenuItem key={age} value={age}>{age}</MenuItem> 
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
}

export default UserGift;