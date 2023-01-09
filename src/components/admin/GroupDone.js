import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const GroupDone = () => {
  const state = useSelector(state => state.admin)

  return (
    <div className="g-container__form">
      <Typography variant="h6">Группа готова!!!</Typography>
      <Typography variant="body2">Адрес регистрации участников группы:</Typography>
      <Link to={`/group/${state.group.id}`} className="g-link">http://localhost:3000/group/{state.group.id}</Link>
      <Typography variant="body2">Отправте эту ссылку всем участникам обмена подарками.</Typography>    
    </div>
  )
};

export default GroupDone;