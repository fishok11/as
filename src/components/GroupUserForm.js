import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../store/actions/actions"

const GroupUserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const stateUser = useSelector(state => state.user);
  const stateAdmin = useSelector(state => state.admin);
  const dispatch = useDispatch()
  let user = {
    groupId: stateAdmin.group.id,
    name: userName,
    email: userEmail,
  };

  return (
    <div className="Group-container Group-container--info">
      <h2>Регистрация пользователя</h2>
      <div>
        <div className="GroupOwner--item">
          <label>Ваше имя:
            <input 
              className="g-input" 
              placeholder="Введите ваше имя"
              value={userName}
              onChange={event => setUserName(event.target.value)}
            ></input>
          </label>
          {stateUser.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
        </div>

        <div className="GroupOwner--item">
          <label>Ваш email:
            <input 
              className="g-input" 
              placeholder="Введите ваш email"
              value={userEmail}
              onChange={event => setUserEmail(event.target.value)}
            ></input>
          </label>
          {stateUser.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
        </div>

        <button 
          className="g-button"
          onClick={() => dispatch(saveUser({
            user,
            name: userName,
            email: userEmail,  
          }))}
        >
          OK
        </button>
      </div>
    </div>
  )
};

export default GroupUserForm;