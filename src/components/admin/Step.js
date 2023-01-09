import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Step = ({ico, action}) => {
  const dispatch = useDispatch()

  return (
    <Button
      variant="text"   
      disableElevation
      sx={{ borderRadius: '50%', minWidth: 0, width: 35, height: 35, p: '8px'}}
      onClick={() => dispatch({type: action})}
    >
      <Typography variant="button" display='block'>{ico}</Typography>
    </Button>
  )
};

export default Step;