import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { GROUP_URL } from "../../util";

const UserInfo = () => {
  const [groupData, setGroupdata] = useState();
  const state = useSelector(state => state.group)
  const {id} = useParams();

  useEffect(() => {
    fetch(GROUP_URL + id)
    .then(res => res.json())
    .then(data => setGroupdata(data))
  }, [id])
  
  if (groupData === undefined) {
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
      {state.step >= 2 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{state.userData.name}, {state.userData.email}</Typography> 
      </div>)}
      {state.step >= 3 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">Подарок для {state.userGift.gender} пола {state.userGift.age} лет</Typography>
      </div>)}
    </>
  )
};

export default UserInfo;