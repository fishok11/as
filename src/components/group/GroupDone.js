import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const GroupDone = () => {
  const state = useSelector(state => state.group)

  return (
    <div className="g-container__form">
      <Typography variant="h6">Группа готова</Typography>
      <Typography variant="body2">Адрес регистрации участников группы:</Typography>
      <Link to={`/group/${state.group.id}`} className="g-link">
        http://localhost:3000/group/{state.group.id}
      </Link>
      <Typography variant="body2" sx={{ mb: '15px' }}>Отправте эту ссылку всем участникам.</Typography>    

      <Typography variant="body2">Ссылка на ваш профиль:</Typography>
      <Link to={`/group/${state.group.id}/user-profile/${state.userData.id}`} className="g-link">
        http://localhost:3000/group/{state.group.id}/user-profile/{state.userData.id}
      </Link>
      <Typography variant="body2">Не потеряйте ее.</Typography>
    </div>
  )
};

export default GroupDone;