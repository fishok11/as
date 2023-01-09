import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/actions"
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userWishes, setUserWishes] = useState("");
  const stateUser = useSelector(state => state.user);
  const dispatch = useDispatch()
  const {id} = useParams();
  let user = {
    groupId: Number(id),
    name: userName,
    email: userEmail,
    wishes: userWishes,
  };

  return (
    <div className="Group-container">
      <Typography variant="h6">Регистрация пользователя</Typography>

      <div className="g-container__form">
        <TextField 
          id="outlined-size-small" 
          label="Введите ваше имя" 
          variant="outlined"
          size="small"
          error={stateUser.error === true}
          margin="normal"
          fullWidth
          value={userName}
          onChange={event => setUserName(event.target.value)}
        ></TextField>

        <TextField 
          id="outlined-size-small" 
          label="Введите ваш email" 
          variant="outlined"
          size="small"
          error={stateUser.error === true}
          margin="normal"
          fullWidth
          value={userEmail}
          onChange={event => setUserEmail(event.target.value)}
        ></TextField>

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

        <Button 
          variant="contained"
          className="g-button"
          onClick={() => dispatch(saveUser({
            user,
            name: userName,
            email: userEmail,  
            wishes: userWishes,
            userId: stateUser.id,
          }))}
        >
          OK
        </Button>
      </div>
    </div>
  )
};

export default UserForm;