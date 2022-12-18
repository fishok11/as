import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroup } from "../../store/actions/actions"

const YourGift = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [giftAge, setGiftAge] = useState(state.yourGift.age)
  const [giftGender, setGiftGender] = useState(state.yourGift.gender)
  const [giftWishes, setGiftWishes] = useState(state.yourGift.wishes)
  let group = {
    name: state.group.name,
    event: {
      budget: state.eventDate.budget,
      registrationDate: state.eventDate.registrationDate,
      drawDate: state.eventDate.drawDate,
      exchangeDate: state.eventDate.exchangeDate,
    },
    groupOwner: {
      name: state.groupOwner.name,
      email: state.groupOwner.email,
    },
    yourGift: {
      age: giftAge,
      gender: giftGender,
      wishes: giftWishes,
    },
  };

  
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
  if (state.yourGift.edit) {
    return (
      <div>
        <h2>Ваш подарок</h2>
        <label >Для возраста:
          <select 
            className="g-input"
            value={giftAge}
            onChange={event => setGiftAge(event.target.value)}
          >
            <option>Не выбрано</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
        </label>
        {state.yourGift.error === true && (<div className="g-error">Поле не может быть пустым!</div>)}

        <div 
          className="YourGift-radio-contsiner"
          value={giftGender}
          onChange={event => setGiftGender(event.target.value)}
        >Пол:
          <label className="YourGift-radio--item">Мужской
            <input type="radio" value="Мужской" name="GiftGender"></input>
          </label>

          <label className="YourGift-radio--item">Женский
            <input type="radio" value="Женский" name="GiftGender"></input>
          </label>
          
          <label className="YourGift-radio--item">Не важно
            <input type="radio" value="Не важно" name="GiftGender"></input>
          </label>
          {state.yourGift.error === true && (<div className="g-error">Выберите что-то одно!</div>)}
        </div>

        <label className="YourGift-label">Пожелания к подарку (не обязательно)
          <textarea 
            className="g-input"
            value={giftWishes}
            onChange={event => setGiftWishes(event.target.value)}
          ></textarea>
        </label>

        <button
          className="g-button"
          onClick={() => dispatch(saveGroup({
            group,
            yourGift: {
              age: giftAge, 
              gender: giftGender, 
              wishes: giftWishes
            },
            groupId: state.group.id,
          }))
          }
        >
          OK
        </button>
      </div>
    )
  }
};

export default YourGift;