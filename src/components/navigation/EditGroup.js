import Step from "./Step";
import { 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_ADMIN_DATA,
  RETURN_CREATE_ADMIN_GIFT,
} from "../../store/actions/actionTypes"
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import RedeemIcon from '@mui/icons-material/Redeem';

const EditGroup = () => {
  return (
    <div className="ReturnToEdit-container">
      <Step ico={<PeopleIcon />} action={RETURN_CREATE_GROUP_NAME} adminStep='1'/>
      <Step ico={<CalendarMonthIcon />} action={RETURN_CREATE_EVENT_DATE} adminStep='2'/>
      <Step ico={<PersonIcon />} action={RETURN_CREATE_ADMIN_DATA} adminStep='3'/>
      <Step ico={<RedeemIcon />} action={RETURN_CREATE_ADMIN_GIFT} adminStep='4'/>
    </div>
  )
}

export default EditGroup;