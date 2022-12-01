import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GroupUserDone = () => {
  const state = useSelector(state => state)
  const [userCreated, seUserCreated] = useState(false)
  const [userCreatedError, seUserCreatedError] = useState(false)
  const saveUserState = state.user.saveUser === true;
  let user = {
    groupId: state.group.id,
    name: state.user.name,
    email: state.user.email,
  };

  useEffect(() => {
    const saveUser = async(user) => {
      try {
        const response = await fetch('http://localhost:3002/users', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        })

        if (response.status < 300) {
          seUserCreated(true);
          return true;
        } else if (response.status >= 300) {
          seUserCreatedError(true);
          return false;
        };
      } catch (error) {
        seUserCreatedError(true);
        return false;
      }
    };
    if (saveUserState) {
      saveUser(user)
    }
  }, [saveUserState]);

  if (userCreatedError === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (userCreated === false) {
    return (
      <p>Данные загружается...</p>
    )
  }; 

  return (
    <h2 className="Group-container Group-container--info">Готово!</h2>
  )
}
 
export default GroupUserDone