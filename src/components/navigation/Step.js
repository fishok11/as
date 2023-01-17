import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

const Step = ({ico, action, stepAdmin, stepUser}) => {
  const dispatch = useDispatch()
  const stateAdmin = useSelector(state => state.admin)
  const stateUser = useSelector(state => state.user)

  return (
    <Button
      variant="text"   
      disableElevation
      disabled={stepAdmin > stateAdmin.step || stepUser > stateUser.step}
      sx={{ borderRadius: '50%', minWidth: 0, width: 35, height: 35, p: '8px', boxSizing: 'border-box'}}
      onClick={() => dispatch({type: action})}
    >
      {ico}
    </Button>
  )
};

export default Step;