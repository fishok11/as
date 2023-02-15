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
import GlobalButton from "../../navigation/GlobalButton";
import {
  EDIT_GROUP_NAME, 
  EDIT_EVENT_DATE,
  EDIT_USER_DATA,
  EDIT_USER_GIFT,
} from "../../../store/actions/actionTypes";
import {
  GROUP_URL, 
  USERS_URL, 
  USER_URL,
} from "../../../util";
import { resetEditProfile, selectRecipient } from "../../../store/actions/actions";

const UserProfile = () => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  const {id} = useParams();
  const {userId} = useParams();
  const [group, setGroup] = useState();
  const [userDb, setUserDb] = useState();
  const [users, setUsers] = useState();
  const [recipient, setRecipient] = useState();
  let user = {
    ...userDb,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(GROUP_URL + id);
      const data = await response.json();
      setGroup(data)
    }
    fetchData()
    .catch(console.error)
    dispatch(resetEditProfile())
  }, [id, dispatch, state.editProfile]);

  useEffect(() => {
    const fetchUserDbData = async () => {
      const response = await fetch(USER_URL + userId);
      const userDbData = await response.json();
      setUserDb(userDbData);

      const fetcRecipienthData = async () => {
        const response = await fetch(USER_URL + userDbData.recipientId);
        const recipientData = await response.json();
        setRecipient(recipientData);
      };

      if (userDbData.recipientId !== null) {
        fetcRecipienthData()
        .catch(console.error);
      };
    };

    fetchUserDbData()
    .catch(console.error);
    dispatch(resetEditProfile());
  }, [userId, dispatch, state.editProfile, state.recipient]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(USERS_URL);
      const data = await response.json();
      setUsers(data)
    }
    fetchData()
    .catch(console.error)
  }, []);

  if (group === undefined || userDb === undefined || users === undefined) {
    return null
  };
  return (
    <div className="Group-container">
      {state.group.editProfileGroup === false && 
      state.eventDate.edit === false && 
      state.userData.edit === false && 
      state.userGift.edit === false && (<>
        <div className="UserProfile__container">
          <Typography variant="h6" sx={{textAlign: 'center'}}>Группа</Typography>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{group.name}</Typography>
            <EditButton ico={<EditIcon />} action={EDIT_GROUP_NAME} adminEdit={userDb.admin}/>
          </div>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{group.eventDate.budget}₽, Регистрация до {group.eventDate.registrationDate}</Typography>
            <EditButton ico={<EditIcon />} action={EDIT_EVENT_DATE} adminEdit={userDb.admin}/>
          </div>
        </div>
        <div className="UserProfile__container">
          <Typography variant="h6" sx={{textAlign: 'center'}}>Ваши данные</Typography>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{userDb.userData.name}, {userDb.userData.email}</Typography> 
            <EditButton ico={<EditIcon />} action={EDIT_USER_DATA} />
          </div>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">Подарок для {userDb.userGift.gender} пола {userDb.userGift.age} лет</Typography>
            <EditButton ico={<EditIcon />} action={EDIT_USER_GIFT} />
          </div>
        </div>
        {recipient !== undefined && (<div className="UserProfile__container UserProfile__container--recipient">
          <Typography variant="subtitle1">Вы дарите подарок {recipient.userData.name}</Typography>
          {recipient.userGift.wishes !== "" && (
            <Typography variant="subtitle1">Пожелания {recipient.userData.name}: {recipient.userGift.wishes}</Typography>
          )}
        </div>)}
        {userDb.recipientId === null && (<GlobalButton 
          text={"Выбрать получателя"}
          onClick={() => dispatch(selectRecipient({
            user: user,
            userId: userId,
            groupId: id,
            users: users,
          }))}
        />)}
      </>)}
      <>
        {state.group.editProfileGroup === true && (<GroupName id={id} profile={true} groupDB={group} />)}
        {state.eventDate.edit === true && (<GroupDates id={id} profile={true} groupDB={group} />)}
        {state.userData.edit === true && (<UserData admin={userDb.admin} userId={userId} profile={true} userDb={userDb} recipientId={userDb.recipientId} />)}
        {state.userGift.edit === true && (<UserGift admin={userDb.admin} userId={userId} profile={true} userDb={userDb} recipientId={userDb.recipientId} />)}
      </>
    </div>
  );
};

export default UserProfile;