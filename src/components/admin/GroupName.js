import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGroupName, createGroupName } from "../../store/actions/actions"


const GroupName = () => {
  const state = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState(state.group.name)
  let group = {
    name: groupName,
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
      gender: state.yourGift.gender,
      wishes: state.yourGift.wishes,
    },
  };
  const isUpdate = Boolean(state.group.id);

  if (state.group.edit) {
    return ( 
      <div>
        <h2>Название вашей группы</h2>
        
        <input
          className="g-input"
          placeholder="Введите название вашей группы"
          value={groupName}
          onChange={event => setGroupName(event.target.value)}
        ></input>
        {state.group.error === true && (<div className="g-error">Название группы не может быть пустым!</div>)}

        <button
          className="g-button"
          onClick={() => (
            isUpdate === true
              ? dispatch(saveGroupName({
                  group ,
                  groupId: state.group.id,
                })) 
              : dispatch(createGroupName({
                group: {
                  name: groupName
                },
            }))
          )}
        >
          OK
        </button>
      </div>
    );
  };
};

export default GroupName;