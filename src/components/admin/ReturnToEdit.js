import Step from "./Step";
import { 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_GROUP_OWNER,
  RETURN_CREATE_YOUR_GIFT,
} from "../../store/actions/actionTypes"
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import RedeemIcon from '@mui/icons-material/Redeem';

const ReturnToEdit = () => {
  return (
    <div className="ReturnToEdit-container">
      <Step ico={<PeopleIcon />} action={RETURN_CREATE_GROUP_NAME}/>
      <Step ico={<CalendarMonthIcon />} action={RETURN_CREATE_EVENT_DATE}/>
      <Step ico={<PersonIcon />} action={RETURN_CREATE_GROUP_OWNER}/>
      <Step ico={<RedeemIcon />} action={RETURN_CREATE_YOUR_GIFT}/>
    </div>
  )
}

export default ReturnToEdit;