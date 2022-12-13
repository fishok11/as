import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GroupDone = () => {
  const state = useSelector(state => state.admin)

  return (
    <div>
      <h2>Группа готова!!!</h2>
      <p>Адрес станицы группы:</p>
      <Link to={`/group-user/${state.group.id}`}>http://localhost:3000/group-user/{state.group.id}</Link>
      <p>Отправте эту ссылку всем участникам обмена подарками</p>    
    </div>
  )
};

export default GroupDone;