import TextField from '@mui/material/TextField';

const GlobalInput = ({label, error, value, onChange}) => {
  return (
    <TextField
      id="outlined-size-small" 
      label={label}
      variant="outlined"
      size="small"
      error={error}
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    >
    </TextField>
  )
};

export default GlobalInput;