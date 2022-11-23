import { useEffect, useState } from "react";
import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupUserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [state, dispatch] = useContext(GroupContext);
  const saveUserState = state.user.saveUser;
  let user = {
    groupId: state.group.id,
    name: userName,
    email: userEmail,
  };

  useEffect(() => {
    const saveUser = async(user) => {
      try {
        const response = await fetch('http://localhost:3002/users', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        })

        if (response.status < 300) {
          return true;
        } else if (response.status >= 300) {
          return false;
        };
      } catch (error) {
        return false
      }
    };

    if (saveUserState === true) {
      saveUser(user)
    }
  }, [saveUserState]);

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
          {state.user.nameError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
          {state.user.emailError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
        </div>

        <button 
          className="g-button"
          onClick={() => dispatch({type: "SAVE_USER", payload: {
            user: {
              userName: userName,
              userEmail: userEmail
          }}})}
        >
          OK
        </button>
      </div>
    </div>
  )
};

export default GroupUserForm;