import TextField from '@mui/material/TextField';

const GlobalInput = ({label, error, value, onChange, type, testId}) => {
  return (
    <TextField

      id="outlined-size-small" 
      label={label}
      variant="outlined"
      size="small"
      margin="normal"
      fullWidth
      inputProps={{ "data-testId": testId }}
      type={type}
      error={error}
      value={value}
      onChange={onChange}
    />
  )
}

export default GlobalInput;