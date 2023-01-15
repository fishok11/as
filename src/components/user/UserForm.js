import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/actions"
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Input from '../Input'

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
        <Input 
          label="Введите ваше имя" 
          error={stateUser.error === true}
          value={userName}
          onChange={event => setUserName(event.target.value)}
        ></Input>

        <Input 
          label="Введите ваш email" 
          error={stateUser.error === true}
          value={userEmail}
          onChange={event => setUserEmail(event.target.value)}
        ></Input>

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