import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupOwner = () => {
  const [state, dispatch] = useContext(GroupContext)
  
  return (
    <div className="group-owner--container">
      <input className="group-owner--item" placeholder="Введите ваше имя"></input>
      <input className="group-owner--item" placeholder="Введите ваш email"></input>
      <button 
      className="group-owner--button"
			onClick={}
      >
          OK
      </button>
    </div>
  )
};

export default GroupOwner;