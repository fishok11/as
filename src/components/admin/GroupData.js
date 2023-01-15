import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const GroupData = () => {
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
        <Typography variant="subtitle1">{state.groupOwner.name}, {state.groupOwner.email}</Typography> 
      </div>)} 
      {state.step > 4 && (<div className="Group-container Group-container--info">
        <Typography variant="subtitle1">Подарок для {state.yourGift.gender} пола {state.yourGift.age} лет</Typography>
      </div>)}
    </div>
  )
};

export default GroupData;