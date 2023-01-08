import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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
    <div className="Group-container Group-container--info">
      <h2>Готово!</h2>
      <p>Ссылка на ваш профиль:</p>
      <Link to={`/group/${id}/user-profile/${state.id}`} className="g-link">http://localhost:3000/group/{id}/user-profile/{state.id}</Link>
      <p>Не потеряйте ее.</p>
    </div>

  )
}
 
export default UserDone;