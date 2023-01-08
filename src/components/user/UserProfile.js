import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [groupData, setGroupdata] = useState()
  const [userData, setUserdata] = useState()
  const {id} = useParams();
  const {userId} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/group/' + id)
    .then(res => res.json())
    .then(data => setGroupdata(data))
  }, [id])

  useEffect(() => {
    fetch('http://localhost:3002/users/' + userId)
    .then(res => res.json())
    .then(data => setUserdata(data))
  }, [userId])

  if (groupData === undefined) {
    return null
  } 
  if (userData === undefined) {
    return null
  } 
  return (
    <>
      <div className="Group-container Group-container--info">
        <h3>{groupData.name}</h3>
        <h3>{groupData.eventDate.budget}₽, Регистрация до {groupData.eventDate.registrationDate}</h3>
        <h3>{userData.name}, {userData.email}</h3> 
      </div>
    </>
  )
};

export default UserProfile;