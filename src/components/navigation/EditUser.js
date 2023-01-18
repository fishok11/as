import Step from "./Step";
import { 
  RETURN_CREATE_USER,
  RETURN_CREATE_USER_GIFT,
} from "../../store/actions/actionTypes"
import PersonIcon from '@mui/icons-material/Person';
import RedeemIcon from '@mui/icons-material/Redeem';

const EditUser = () => {
  return (
    <div className="ReturnToEdit-container">
      <Step ico={<PersonIcon />} action={RETURN_CREATE_USER} stepUser='1'/>
      <Step ico={<RedeemIcon />} action={RETURN_CREATE_USER_GIFT} stepUser='2'/>
    </div>
  )
}

export default EditUser;