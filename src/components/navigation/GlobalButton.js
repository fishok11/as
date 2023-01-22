import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GlobalButton = ({onClick, text}) => {
  return ( 
    <Button 
      variant="contained"
      disableElevation
      onClick={onClick}
    >
      <Typography variant="button" display="block">{text}</Typography>
    </Button>
  );
};

export default GlobalButton;