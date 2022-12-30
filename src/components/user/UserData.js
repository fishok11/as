import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h3>{groupData.name}</h3>
      </div>
      <div className="Group-container Group-container--info">
        <h3>{groupData.eventDate.budget}₽, Регистрация до {groupData.eventDate.registrationDate}</h3>
      </div>
    </>
  )
};

export default UserData;