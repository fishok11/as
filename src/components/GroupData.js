import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupData = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div>
      {state.step > 1 && (<div className="GroupData-info">
        <h3>{state.group.name}</h3>
      </div>)}
      {state.step > 2 && (<div className="GroupData-info">
        <h3>{state.eventDate.budget}₽, Регистрация до {state.eventDate.registrationDate}</h3>
      </div>)}
      {state.step > 3 && (<div className="GroupData-info">
        <h3>{state.groupOwner.name}, {state.groupOwner.email}</h3> 
      </div>)}
      {state.step > 4 && (<div className="GroupData-info">
        <h3>{state.yourGift.gender} {state.yourGift.age} лет</h3>
      </div>)}
    </div>
  )
};

export default GroupData;