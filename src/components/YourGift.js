import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createYourGift } from "../store/actions"

const YourGift = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [giftAge, setGiftAge] = useState(state.yourGift.age)
  const [giftGender, setGiftGender] = useState(state.yourGift.gender)
  const [giftWishes, setGiftWishes] = useState(state.yourGift.wishes)

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
        >
          <label className="YourGift-radio--item">Для мальчика
            <input type="radio" value="Для мальчика" name="GiftGender"></input>
          </label>

          <label className="YourGift-radio--item">Для девочки
            <input type="radio" value="Для девочки" name="GiftGender"></input>
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
          onClick={() => dispatch(createYourGift({
            yourGift: {
              age: giftAge, 
              gender: giftGender, 
              wishes: giftWishes
            }}))
          }
        >
          OK
        </button>
      </div>
    )
  }
};

export default YourGift;