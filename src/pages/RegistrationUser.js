import GroupData from "../components/GroupData";

const RegistrationUser = () => {
  return (
    <>
      <GroupData/>
      <div className="GroupData-info">
        <h2>Регистрация пользователя</h2>
        <div>
          <div className="GroupOwner--item">
            <label>Ваше имя:
              <input 
                className="g-input" 
                placeholder="Введите ваше имя"
              ></input>
            </label>
            {/* {state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)} */}
          </div>

          <div className="GroupOwner--item">
            <label>Ваш email:
              <input 
                className="g-input" 
                placeholder="Введите ваш email"
              ></input>
            </label>
            {/* {state.groupOwner.error === true && (<div className="g-error">Поле не может быть пустым!</div>)} */}
          </div>

          <button 
            className="g-button"
          >
            OK
          </button>
        </div>
      </div>
    </>
  )
};

export default RegistrationUser