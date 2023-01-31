import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

const EditButton = ({ico, action, adminStep, userStep}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.group)

  return (
    <Button
      variant="text"   
      disableElevation
      disabled={adminStep > state.step || userStep > state.userStep}
      sx={{ borderRadius: '50%', minWidth: 0, width: 35, height: 35, p: '8px', boxSizing: 'border-box'}}
      onClick={() => dispatch({type: action})}
    >
      {ico}
    </Button>
  )
};

export default EditButton;