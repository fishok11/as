import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../store/actions/actions"
import { useParams } from "react-router-dom";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userWishes, setUserWishes] = useState("");
  const stateUser = useSelector(state => state.user);
  const dispatch = useDispatch()
  const {id} = useParams();
  let user = {
    groupId: Number(id),
    name: userName,
    email: userEmail,
    wishes: userWishes,
  };

  return (
    <div className="Group-container Group-container--info">
      <h2>Регистрация пользователя</h2>
      <div>
        <div className="GroupOwner__item">
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

        <div className="GroupOwner__item">
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

        <label className="YourGift-label">Пожелания к подарку (не обязательно)
          <textarea 
            className="g-input"
            value={userWishes}
            onChange={event => setUserWishes(event.target.value)}
          ></textarea>
        </label>

        <button 
          className="g-button"
          onClick={() => dispatch(saveUser({
            user,
            name: userName,
            email: userEmail,  
            wishes: userWishes,
          }))}
        >
          OK
        </button>
      </div>
    </div>
  )
};

export default UserForm;