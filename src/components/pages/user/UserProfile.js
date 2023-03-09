import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import db from '../../../firebase'; 
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import GroupName from '../../screens/GroupName';
import GroupDates from '../../screens/GroupDates';
import UserData from '../../screens/UserData';
import UserGift from '../../screens/UserGift';
import EditButton from '../../navigation/EditButton';
import EditIcon from '@mui/icons-material/Edit';
import GlobalButton from "../../navigation/GlobalButton";
import {
  EDIT_GROUP_NAME, 
  EDIT_EVENT_DATE,
  EDIT_USER_DATA,
  EDIT_USER_GIFT,
} from "../../../store/actions/actionTypes";
import { resetUpdateProfile, selectRecipient } from "../../../store/actions/actions";

const UserProfile = () => {
  const state = useSelector(state => state.group);
  const dispatch = useDispatch();
  
  const {groupId} = useParams();
  const {userId} = useParams();

  const [groupDb, setGroupDb] = useState();
  const [userDb, setUserDb] = useState();
  const [users, setUsers] = useState();
  const [recipient, setRecipient] = useState();

  // let recipients = {};
  // let group = {
  //   ...groupDb,
  //   recipients: recipients,
  // }
  // if (users !== undefined || groupDb !== undefined) {
  //   const mixUsersArr = mixUsers(users);
  //   users.forEach((user, index) => recipients[user.id] = mixUsersArr[index].id); 
  // }

  useEffect(() => {
    const groupData = async() => {
      const docRef = doc(db, "groups", groupId);
      const docGroup = await getDoc(docRef);

      if (docGroup.exists()) {
        setGroupDb(docGroup.data())
      } else {
        return null; 
      }
    }
    groupData()
    .catch(error => console.log(error));
    dispatch(resetUpdateProfile());
  }, [groupId, dispatch, state.updateProfile]);

  useEffect(() => {
    const userData = async() => {
      const docRef = doc(db, "users", userId);
      const docUserDb = await getDoc(docRef);

      if (docUserDb.exists()) {
        setUserDb(docUserDb.data());
      } else {
        return null;
      }

      const recipienthData = async() => {
        const docRef = doc(db, "users", docUserDb.data().recipientId);
        const docRecipient = await getDoc(docRef);
  
        if (docUserDb.exists()) {
          setRecipient(docRecipient.data());
        } else {
          return null;
        }
      }

      if (docUserDb.data().recipientId !== null) {
        recipienthData()
        .catch(error => console.log(error));
      }
    }

    userData()
    .catch(error => console.log(error));
    dispatch(resetUpdateProfile());
  }, [userId, dispatch, state.updateProfile, state.recipient]);

  useEffect(() => {
    const usersData = async() => {
      const docRef = query(collection(db, "users"), where("groupId", "==", groupId));
      const docs = await getDocs(docRef);
      let allUsers = [];

      docs.forEach((doc) => {
        const oneUser = doc.data()
        oneUser.id = doc.id
        allUsers.push(oneUser)
      });
      setUsers(allUsers);
    }
    usersData()
    .catch(error => console.log(error));
  }, [groupId]);

  if (groupDb === undefined || userDb === undefined || users === undefined) {
    return null;
  }
  return (
    <div className="Group-container">
      {state.group.editProfile === false && 
      state.eventDate.editProfile === false && 
      state.userData.editProfile === false && 
      state.userGift.editProfile === false && (<>
        <div className="UserProfile__container">
          <Typography variant="h6" sx={{textAlign: 'center'}}>Группа</Typography>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{groupDb.name}</Typography>
            <EditButton ico={<EditIcon />} action={EDIT_GROUP_NAME} adminEdit={userDb.admin}/>
          </div>
          <div className="UserProfile__item">
            <Typography variant="subtitle1">{groupDb.eventDate.budget}₽, Регистрация до {groupDb.eventDate.registrationDate}</Typography>
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
        {userDb.recipientId === null && (
        <GlobalButton 
          text={"Выбрать получателя"}
          profile={true}
          drawDate={groupDb.eventDate.drawDate}
          onClick={() => dispatch(selectRecipient({
            user: userDb,
            group: groupDb,
            users: users,
            userId: userId,
            groupId: groupId,
          }))}
        />)}
      </>)}
      <>
        {state.group.editProfile === true && (<GroupName groupId={groupId} profile={true} groupDb={groupDb} />)}
        {state.eventDate.editProfile === true && (<GroupDates groupId={groupId} profile={true} groupDb={groupDb} />)}
        {state.userData.editProfile === true && (<UserData admin={userDb.admin} userId={userId} profile={true} userDb={userDb} recipientId={userDb.recipientId} />)}
        {state.userGift.editProfile === true && (<UserGift admin={userDb.admin} userId={userId} profile={true} userDb={userDb} recipientId={userDb.recipientId} />)}
      </>
    </div>
  )
}

export default UserProfile;