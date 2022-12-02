import { useSelector } from "react-redux";

const GroupData = () => {
  const state = useSelector(state => state.admin)

  return (
    <div>
      {state.step > 1 && (<div className="Group-container Group-container--info">
        <h3>{state.group.name}</h3>
      </div>)}
      {state.step > 2 && (<div className="Group-container Group-container--info">
        <h3>{state.eventDate.budget}₽, Регистрация до {state.eventDate.registrationDate}</h3>
      </div>)}
      {state.step > 3 && (<div className="Group-container Group-container--info">
        <h3>{state.groupOwner.name}, {state.groupOwner.email}</h3> 
      </div>)} 
      {state.step > 4 && (<div className="Group-container Group-container--info">
        <h3>{state.yourGift.gender} {state.yourGift.age} лет</h3>
      </div>)}
    </div>
  )
};

export default GroupData;