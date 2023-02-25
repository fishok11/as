import TextField from '@mui/material/TextField';

const GlobalInput = ({label, error, value, onChange, type}) => {
  return (
    <TextField
      id="outlined-size-small" 
      label={label}
      variant="outlined"
      size="small"
      type={type}
      error={error}
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    />
  )
}

export default GlobalInput;