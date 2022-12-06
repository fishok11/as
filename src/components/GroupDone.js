import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GroupDone = () => {
  const state = useSelector(state => state.admin)

  if (state.errorFetch === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (state.groupCreating === true) {
    return (
      <p>Группа загружается...</p>
    )
  }; 

  return (
    <div>
      <h2>Группа готова!!!</h2>
      <p>Адрес станицы группы:</p>
      <Link to={`/group-user/${state.group.id}`}>RegistrationUser</Link>
      <p>Отправте эту ссылку всем участникам обмена подарками</p>    
    </div>
  )
};

export default GroupDone;