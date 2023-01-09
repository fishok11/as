import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserData = () => {
  const [groupData, setGroupdata] = useState()
  const {id} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/group/' + id)
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
    </>
  )
};

export default UserData;