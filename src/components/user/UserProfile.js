import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserProfile = () => {
  const [groupData, setGroupdata] = useState();
  const [userData, setUserdata] = useState();
  const {id} = useParams();
  const {userId} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/group/' + id)
    .then(res => res.json())
    .then(data => setGroupdata(data))
  }, [id]);

  useEffect(() => {
    fetch('http://localhost:3002/users/' + userId)
    .then(res => res.json())
    .then(data => setUserdata(data))
  }, [userId]);

  if (groupData === undefined) {
    return null
  }
  if (userData === undefined) {
    return null
  } 
  return (
    <>
      <div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{groupData.name}</Typography>
        <Typography variant="subtitle1">{groupData.eventDate.budget}₽, Регистрация до {groupData.eventDate.registrationDate}</Typography>
        <Typography variant="subtitle1">{userData.userData.name}, {userData.userData.email}</Typography> 
        <Typography variant="subtitle1">Подарок для {userData.userGift.gender} пола {userData.userGift.age} лет</Typography>
      </div>
    </>
  )
};

export default UserProfile;