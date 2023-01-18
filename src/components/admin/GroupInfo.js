import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const GroupInfo = () => {
  const state = useSelector(state => state.admin)

  return (
    <div>
      {state.step > 1 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{state.group.name}</Typography>
      </div>)}
      {state.step > 2 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{state.eventDate.budget}₽, Регистрация до {state.eventDate.registrationDate}</Typography>
      </div>)}
      {state.step > 3 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">{state.userData.name}, {state.userData.email}</Typography> 
      </div>)} 
      {state.step > 4 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">Подарок для {state.userGift.gender} пола {state.userGift.age} лет</Typography>
      </div>)}
    </div>
  )
};

export default GroupInfo;