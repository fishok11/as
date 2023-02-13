import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { GROUP_URL } from "../../../util";

const UserInfo = () => {
  const [group, setGroup] = useState();
  const state = useSelector(state => state.group)
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(GROUP_URL + id);
      const data = await response.json();
      setGroup(data)
    }
    fetchData()
    .catch(console.error)
  }, [id])
  
  if (group === undefined) {
    return null
  }
  return (
    <>
      <div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{group.name}</Typography>
      </div>
      <div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{group.eventDate.budget}₽, Регистрация до {group.eventDate.registrationDate}</Typography>
      </div>
      {state.userStep >= 2 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{state.userData.name}, {state.userData.email}</Typography> 
      </div>)}
      {state.userStep >= 3 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">Подарок для {state.userGift.gender} пола {state.userGift.age} лет</Typography>
      </div>)}
    </>
  )
};

export default UserInfo;