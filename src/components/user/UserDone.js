import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserDone = () => {
  const state = useSelector(state => state.user)
  const [userData, setUserdata] = useState();
  const {id} = useParams();

  useEffect(() => {
    fetch('http://localhost:3002/users/' + state.userData.id)
    .then(res => res.json())
    .then(data => setUserdata(data))
  }, [state.userData.id])

  if (userData === undefined) {
    return null
  } 
  if (state.errorFetch === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (state.userCreating === true) {
    return (
      <p>Данные загружается...</p>
    )
  }; 
  return (
    <>
      <div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{userData.userData.name}, {userData.userData.email}</Typography> 
      </div>
      <div className="Group-container">
        <Typography variant="h6">Готово!</Typography>
        <Typography variant="body2">Ссылка на ваш профиль:</Typography>
        <Link to={`/group/${id}/user-profile/${state.userData.id}`} className="g-link">http://localhost:3000/group/{id}/user-profile/{state.userData.id}</Link>
        <Typography variant="body2">Не потеряйте ее.</Typography>
      </div>
    </>
  )
}
 
export default UserDone;