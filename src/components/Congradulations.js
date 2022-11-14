import { useContext, useEffect, useState } from "react";
import { GroupContext } from "../context/main";

const Congradulations = () => {
  const [state, dispatch] = useContext(GroupContext)
  const [groupId, setGroupId] = useState();
  const [groupCreated, setGroupCreated] = useState(false);
  const [errorGroupCreated, setErrorGroupCreated] = useState(false);
  const saveGroup = state.saveGroup === true
  
  useEffect(() => {
    const createGroup = async(group) => {
      try {
        const response = await fetch('http://localhost:3002/group', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group)
        })
        const data = await response.json()

        if (response.status < 300) {
          setGroupId(data.id);
          setGroupCreated(true);
          return true;
        } else if (response.status >= 300) {
          setErrorGroupCreated(true)
          return false;
        };
      } catch (error) {
        setErrorGroupCreated(true)
      }
    };
    createGroup(group) 
  }, [saveGroup]);
  
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
      age: state.yourGift.age,
      gender: state.yourGift.wishes,
      wishes: state.yourGift.gender,
    },
  };

  if (errorGroupCreated === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (groupCreated === false) {
    return (
      <p>Группа создается...</p>
    )
  }; 

  return (
    <div>
      <h2>Группа готова!!!</h2>
      <p>Адрес станицы группы:</p>
      <a href={`http://localhost:3002/group/${groupId}`}>http://localhost:3002/group/{groupId}</a>
      <p>Отправте эту ссылку всем участникам обмена подарками</p>
    </div>
  )
};

export default Congradulations;