import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserDone = () => {
  const state = useSelector(state => state.admin)
  const {id} = useParams();

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
      <Typography variant="h6">Готово!</Typography>
      <Typography variant="body2">Ссылка на ваш профиль:</Typography>
      <Link to={`/group/${id}/user-profile/${state.userData.id}`} className="g-link">http://localhost:3000/group/{id}/user-profile/{state.userData.id}</Link>
      <Typography variant="body2">Не потеряйте ее.</Typography>
    </>
  )
}
 
export default UserDone;