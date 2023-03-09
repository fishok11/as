import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GlobalButton = ({onClick, text, profile, drawDate}) => {
  // const date = new Date()
  // const drawDateFormat = new Date(drawDate)
  return ( 
    <Button 
      variant="contained"
      disableElevation
      fullWidth
      // disabled={profile === true && drawDateFormat > date}
      sx={{mt: '10px'}}
      onClick={onClick}
    >
      <Typography variant="button" display="block">{text}</Typography>
    </Button>
  );
}

export default GlobalButton;