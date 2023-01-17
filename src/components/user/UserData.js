import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../store/actions/actions"
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

const UserData = () => {
  const state = useSelector(state => state.user);
  const [userName, setUserName] = useState(state.userData.name);
  const [userEmail, setUserEmail] = useState(state.userData.email);
  const dispatch = useDispatch()
  const {id} = useParams();
  let user = {
    groupId: Number(id),
    userData:{
      name: userName,
      email: userEmail,
    },
    userGift: {
      age: state.userGift.age,
      gender: state.userGift.gender,
      wishes: state.userGift.wishes,
    },
  };

  return (
    <>
      <Typography variant="h6">Регистрация пользователя</Typography>

      <div className="g-container__form">
        <GlobalInput 
          label="Введите ваше имя" 
          error={state.userData.error === true}
          value={userName}
          onChange={event => setUserName(event.target.value)}
        ></GlobalInput>

        <GlobalInput 
          label="Введите ваш email" 
          error={state.userData.error === true}
          value={userEmail}
          onChange={event => setUserEmail(event.target.value)}
        ></GlobalInput>

        <GlobalButton 
          text={"OK"}
          onClick={() => dispatch(saveUserData({
            user,
            userId: state.userData.id,
          }))}
        ></GlobalButton>
      </div>
    </>
  )
};

export default UserData;