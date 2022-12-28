import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEventDate, createEventDate } from "../../store/actions/actions"

const EventDate = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [budget, setBudget] = useState(state.eventDate.budget)
  const [registrationDate, setRegistrationDate] = useState(state.eventDate.registrationDate)
  const [drawDate, setChoiceDate] = useState(state.eventDate.drawDate)
  const [exchangeDate, setExchangeDate] = useState(state.eventDate.exchangeDate)
  let group = {
    name: state.group.name,
    event: {
      budget: budget,
      registrationDate: registrationDate,
      drawDate: drawDate,
      exchangeDate: exchangeDate,
    },
    groupOwner: {
      name: state.groupOwner.name,
      email: state.groupOwner.email,
    },
    yourGift: {
      age: state.yourGift.age,
      gender: state.yourGift.gender,
      wishes: state.yourGift.wishes,
    },
  }
  const isUpdate = Boolean(state.group.id);

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
                value={budget}
                onChange={event => setBudget(event.target.value)}
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
                value={registrationDate}
                onChange={event => setRegistrationDate(event.target.value)}
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
                value={drawDate}
                onChange={event => setChoiceDate(event.target.value)}
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
                value={exchangeDate}
                onChange={event => setExchangeDate(event.target.value)}
              ></input>
            </label>
            {state.eventDate.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}
          </div>
    
          <button
            className="g-button"
            onClick={() => (
              isUpdate === true
              ? dispatch(saveEventDate({
                  group,
                  groupId: state.group.id,
                })) 
              : dispatch(createEventDate({
                eventDate: {
                  budget: budget, 
                  registrationDate: registrationDate, 
                  drawDate: drawDate, 
                  exchangeDate: exchangeDate,
                },
                groupId: state.group.id,
              })
            ))}
          >
            OK
          </button>
        </div>
      </div>
    )
  }
};

export default EventDate;