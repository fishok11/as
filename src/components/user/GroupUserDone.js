import { useSelector } from "react-redux";

const GroupUserDone = () => {
  const state = useSelector(state => state.user)

  if (state.errorFetch === true) {
    return (
      <p className="g-error">Error</p>
    )
  };
  if (state.userCreating === true) {
    return (
      <p>Данные загружается...</p>
    )
  }; 

  return (
    <h2 className="Group-container Group-container--info">Готово!</h2>
  )
}
 
export default GroupUserDone;