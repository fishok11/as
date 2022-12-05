import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../store/actions"

const GroupUserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const state = useSelector(state => state.user);
  const dispatch = useDispatch()

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
          {state.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
          {state.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
        </div>

        <button 
          className="g-button"
          onClick={() => dispatch(saveUser({
            userName: userName,
            userEmail: userEmail
          }))}
        >
          OK
        </button>
      </div>
    </div>
  )
};

export default GroupUserForm;