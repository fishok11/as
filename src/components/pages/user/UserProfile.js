import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import GroupName from '../../forms/GroupName';
import GroupDates from '../../forms/GroupDates';
import UserData from '../../forms/UserData';
import UserGift from '../../forms/UserGift';
import EditButton from '../../navigation/EditButton';
import EditIcon from '@mui/icons-material/Edit';
import {
  EDIT_GROUP_NAME, 
  EDIT_EVENT_DATE,
  EDIT_USER_DATA,
  EDIT_USER_GIFT,
} from "../../../store/actions/actionTypes";
import {
  GROUP_URL, 
  USER_URL,
} from "../../../util";
import { resetEditProfile } from "../../../store/actions/actions";

const UserProfile = () => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  const [group, setGroup] = useState();
  const [user, setUser] = useState();
  const {id} = useParams();
  const {userId} = useParams();

  useEffect(() => {
    fetch(GROUP_URL + id)
    .then(res => res.json())
    .then(data => setGroup(data))
    dispatch(resetEditProfile())
  }, [id, dispatch, state.editProfile]);
  useEffect(() => {
    fetch(USER_URL + userId)
    .then(res => res.json())
    .then(data => setUser(data))
    dispatch(resetEditProfile())
  }, [userId, dispatch, state.editProfile]);

  if (group === undefined) {
    return null
  }
  if (user === undefined) {
    return null
  } 
  return (
    <div className="Group-container ">
      {state.group.editProfileGroup === false && 
      state.eventDate.edit === false && 
      state.userData.edit === false && 
      state.userGift.edit === false && (<>
        <div className="UserProfile__container">
          <Typography variant="h6" sx={{textAlign: 'center'}}>Группа</Typography>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{group.name}</Typography>
            {user.admin === true && (<EditButton ico={<EditIcon />} action={EDIT_GROUP_NAME} />)}
          </div>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{group.eventDate.budget}₽, Регистрация до {group.eventDate.registrationDate}</Typography>
            {user.admin === true && (<EditButton ico={<EditIcon />} action={EDIT_EVENT_DATE} />)}
          </div>
        </div>
        <div className="UserProfile__container">
          <Typography variant="h6" sx={{textAlign: 'center'}}>Ваши данные</Typography>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{user.userData.name}, {user.userData.email}</Typography> 
            <EditButton ico={<EditIcon />} action={EDIT_USER_DATA} />
          </div>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">Подарок для {user.userGift.gender} пола {user.userGift.age} лет</Typography>
            <EditButton ico={<EditIcon />} action={EDIT_USER_GIFT} />
          </div>
        </div>
      </>)}
      <>
        {state.group.editProfileGroup === true && (<GroupName id={id} profile={true} groupDB={group} />)}
        {state.eventDate.edit === true && (<GroupDates id={id} profile={true} groupDB={group} />)}
        {state.userData.edit === true && (<UserData admin={user.admin} userId={userId} profile={true} userDB={user} />)}
        {state.userGift.edit === true && (<UserGift admin={user.admin} userId={userId} profile={true} userDB={user} />)}
      </>
    </div>
  )
};

export default UserProfile;