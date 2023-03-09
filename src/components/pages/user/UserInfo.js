import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import db from '../../../firebase'; 
import { doc, getDoc } from "firebase/firestore";
import Typography from '@mui/material/Typography';

const UserInfo = () => {
  const state = useSelector(state => state.group)

  const {groupId} = useParams();
  
  const [group, setGroup] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "groups", groupId);
      const docGroup = await getDoc(docRef);

      if (docGroup.exists()) {
        setGroup(docGroup.data())
      } else {
        return null 
      }
    } 

    fetchData()
    .catch(error => console.log(error))
  }, [groupId])
  
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
}

export default UserInfo;