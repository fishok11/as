import { useContext, useEffect, useState } from "react";
import { GroupContext } from "../context/main";
import { useParams } from "react-router-dom";

const GroupUserData = () => {
  const [state, dispatch] = useContext(GroupContext);
  const [groupData, setGroupdata] = useState()
  const {id} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/group/' + id)
    .then(res => res.json())
    .then(data => setGroupdata(data))
  }, [])
  
  if (groupData === undefined) {
    return null
  } 
  return (
    <>
      <div className="GroupData-info">
        <h3>{groupData.name}</h3>
      </div>
      <div className="GroupData-info">
        <h3>{groupData.event.budget}₽, Регистрация до {groupData.event.registrationDate}</h3>
      </div>
      <div className="GroupData-info">
        <h3>{groupData.groupOwner.name}, {groupData.groupOwner.email}</h3> 
      </div>
      <div className="GroupData-info">
        <h3>{groupData.yourGift.gender} {groupData.yourGift.age} лет</h3>
      </div>
    </>
  )
};

export default GroupUserData;