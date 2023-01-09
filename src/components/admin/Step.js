import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Step = ({number, action}) => {
  const dispatch = useDispatch()

  return (
    <Button
      variant="contained"   
      disableElevation
      sx={{ borderRadius: '50%', minWidth: 0, width: 35, height: 35, p: '8px'}}
      onClick={() => dispatch({type: action})}
    >
      <Typography variant="button" >{number}</Typography>
    </Button>
  )
};

export default Step;