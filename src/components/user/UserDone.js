import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const UserDone = () => {
  const state = useSelector(state => state.user)
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
    <div className="Group-container">
      <Typography variant="h6">Готово!</Typography>
      <Typography variant="body2">Ссылка на ваш профиль:</Typography>
      <Link to={`/group/${id}/user-profile/${state.id}`} className="g-link">http://localhost:3000/group/{id}/user-profile/{state.id}</Link>
      <Typography variant="body2">Не потеряйте ее.</Typography>
    </div>

  )
}
 
export default UserDone;