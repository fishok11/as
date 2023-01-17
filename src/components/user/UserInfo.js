import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserInfo = () => {
  const [groupData, setGroupdata] = useState();
  const [userData, setUserdata] = useState();
  const state = useSelector(state => state.user)
  const {id} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/group/' + id)
    .then(res => res.json())
    .then(data => setGroupdata(data))
  }, [id])
  useEffect(() => {
    fetch('http://localhost:3002/users/' + state.userData.id)
    .then(res => res.json())
    .then(data => setUserdata(data))
  }, [state.userData.id])
  
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
      </div>
      <div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{groupData.eventDate.budget}₽, Регистрация до {groupData.eventDate.registrationDate}</Typography>
      </div>
      {state.step === 3 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{userData.userData.name}, {userData.userData.email}</Typography> 
      </div>)}
    </>
  )
};

export default UserInfo;