import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEventDate } from "../store/actions/actions"

const EventDate = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [budgetInput, setBudgetInput] = useState(state.eventDate.budget)
  const [registrationDateInput, setRegistrationDateInput] = useState(state.eventDate.registrationDate)
  const [drawDateInput, setChoiceDateInput] = useState(state.eventDate.drawDate)
  const [exchangeDateInput, setExchangeDateInput] = useState(state.eventDate.exchangeDate)

  if (state.eventDate.edit) {
    return (
      <div>
        <h2>Регистрация участников</h2>
        <div>
          <div className="EventDate-item">
            <label >Бюджет:
              <input 
                className="g-input" 
                placeholder="Бюджет"
                value={budgetInput}
                onChange={event => setBudgetInput(event.target.value)}
              ></input>
            </label>
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>
    
          <div className="EventDate-item">
            <label>Регистрация участников до:
              <input 
                type="date"
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
                type="date"
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
                type="date"
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
            onClick={() => dispatch(createEventDate({eventDate: {
              budget: budgetInput, 
              registrationDate: registrationDateInput, 
              drawDate: drawDateInput, 
              exchangeDate: exchangeDateInput,
            }}))}
          >
            OK
          </button>
        </div>
      </div>
    )
  }
};

export default EventDate;