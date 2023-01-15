import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

const Step = ({ico, action, step}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.admin)

  return (
    <Button
      variant="text"   
      disableElevation
      disabled={step > state.step}
      sx={{ borderRadius: '50%', minWidth: 0, width: 35, height: 35, p: '8px', boxSizing: 'border-box'}}
      onClick={() => dispatch({type: action})}
    >
      {ico}
    </Button>
  )
};

export default Step;