import EditButton from "./EditButton";
import { 
  RETURN_CREATE_USER,
  RETURN_CREATE_USER_GIFT,
} from "../../store/actions/actionTypes"
import PersonIcon from '@mui/icons-material/Person';
import RedeemIcon from '@mui/icons-material/Redeem';

const EditUser = () => {
  return (
    <div className="ReturnToEdit-container">
      <EditButton ico={<PersonIcon />} action={RETURN_CREATE_USER} userStep='1'/>
      <EditButton ico={<RedeemIcon />} action={RETURN_CREATE_USER_GIFT} userStep='2'/>
    </div>
  )
}

export default EditUser;