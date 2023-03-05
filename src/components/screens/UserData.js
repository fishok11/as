import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../store/actions/actions"
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import GlobalInput from '../navigation/GlobalInput'
import GlobalButton from "../navigation/GlobalButton";

const UserData = ({admin, userId, profile, userDb, recipientId}) => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  const {groupId} = useParams();
  const [userName, setUserName] = useState(profile === true ? userDb.userData.name : state.userData.name);
  const [userEmail, setUserEmail] = useState(profile === true ? userDb.userData.email : state.userData.email);
  let user = {
    groupId: profile === true || admin === false ? groupId : state.group.id,
    userData:{
      name: userName,
      email: userEmail,
    },
    userGift: {
      age: profile === true ? userDb.userGift.age : state.userGift.age,
      gender: profile === true ? userDb.userGift.gender : state.userGift.gender,
      wishes: profile === true ? userDb.userGift.wishes : state.userGift.wishes,
    },
    admin: admin,
    recipientId: profile === true ? recipientId : null,
  }

  return (
    <>
      <Typography variant="h6">Ваши данные</Typography>

      <div className="g-container__form">
        <GlobalInput 
          testid="user-data-name-input"
          label="Введите ваше имя" 
          error={state.userData.error === true}
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />

        <GlobalInput 
          testid="user-data-email-input"
          label="Введите ваш email" 
          error={state.userData.error === true}
          value={userEmail}
          onChange={event => setUserEmail(event.target.value)}
        />

        <GlobalButton 
          text={"OK"}
          onClick={() => dispatch(saveUserData({
            user,
            userId: userId,
            profile: profile,
          }))}
        />
      </div>
    </>
  )
}

export default UserData;