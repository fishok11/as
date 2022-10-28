import { useContext, useState } from "react";
import { GroupContext } from "../context/main";

const EventDate = () => {
  const [state, dispatch] = useContext(GroupContext);

  const [budgetInput, setBudgetInput] = useState(state.eventDate.budget)
  const [registrationDateInput, setRegistrationDateInput] = useState(state.eventDate.registrationDate)
  const [drawDateInput, setChoiceDateInput] = useState(state.eventDate.drawDate)
  const [exchangeDateInput, setExchangeDateInput] = useState(state.eventDate.exchangeDate)

  if (state.eventDate.edit) {
    return (
      <>
        <h1>Регистрация участников</h1>
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
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
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
              }})
            }
          >
            OK
          </button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div 
          className="g-link"
          onClick={() => dispatch({type: "RETURN_CREATE_EVENT_DATE"})}
        >
          Регистрация участников
        </div>
      </>
    )
  }
};

export default EventDate;