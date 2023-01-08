import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GroupDone = () => {
  const state = useSelector(state => state.admin)

  return (
    <div>
      <h2>Группа готова!!!</h2>
      <p>Адрес регистрации участников группы:</p>
      <Link to={`/group/${state.group.id}`} className="g-link">http://localhost:3000/group/{state.group.id}</Link>
      <p>Отправте эту ссылку всем участникам обмена подарками.</p>    
    </div>
  )
};

export default GroupDone;