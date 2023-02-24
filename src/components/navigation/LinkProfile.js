import Button from '@mui/material/Button';

const LinkProfile = ({href}) => {
  return (
    <>
      <Button href={href} target="_blank" rel="noreferrer">Перейти в профиль</Button>
    </>
  )
}
 
export default LinkProfile;