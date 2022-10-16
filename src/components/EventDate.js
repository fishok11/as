import { useContext, useState } from "react";
import { GroupContext } from "../context/main";
import GroupOwner from "./GroupOwner";

const EventDate = () => {
  const [state, dispatch] = useContext(GroupContext);

  const [budgetInput, setBudgetInput] = useState("")
  const [registrationDateInput, setRegistrationDateInput] = useState("")
  const [drawDateInput, setChoiceDateInput] = useState("")
  const [exchangeDateInput, setExchangeDateInput] = useState("")

  return (
    <>
      {state.eventDate.showEventDate === true && state.group.showGroupName === false && (
        <div>
          <div className="EventDate-item">
            <label >Бюджет:
              <input 
              className="g-input" 
              placeholder="budget"
              value={budgetInput}
              onChange={event => setBudgetInput(event.target.value)}
              ></input>
            </label>
            {state.eventDate.eventDateError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>

          <div className="EventDate-item">
            <label>Регистрация участников до:
              <input 
              className="g-input" 
              placeholder="Date"
              value={registrationDateInput}
              onChange={event => setRegistrationDateInput(event.target.value)}
              ></input>
            </label>
            {state.eventDate.eventDateError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>

          <div className="EventDate-item">
            <label>Выбор получателей подарков до:
              <input 
              className="g-input" 
              placeholder="Date"
              value={drawDateInput}
              onChange={event => setChoiceDateInput(event.target.value)}
              ></input>
            </label>
            {state.eventDate.eventDateError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>
          
          <div className="EventDate-item">
            <label>Обмен подарками:
              <input 
              className="g-input" 
              placeholder="Date"
              value={exchangeDateInput}
              onChange={event => setExchangeDateInput(event.target.value)}
              ></input>
            </label>
            {state.eventDate.eventDateError === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>

          <button
            className="g-button"
            onClick={() => dispatch({
              type: "CREATE_DATE_OF_EVENT", 
              payload: {
                eventDate: {
                  budget: budgetInput, 
                  registrationDate: registrationDateInput, 
                  drawDate: drawDateInput, 
                  exchangeDate: exchangeDateInput,
                }
            }})}
          >
            OK
          </button>
        </div>
      )}

      <GroupOwner></GroupOwner>
      
    </>
  )
};

export default EventDate;