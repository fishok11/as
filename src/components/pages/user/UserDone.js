import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import GlobalLink from "../../navigation/GlobalLink";
import LinkProfile from "../../navigation/LinkProfile";

const UserDone = () => {
  const state = useSelector(state => state.group)
  const {id} = useParams();

  return (
    <>
      <Typography variant="h6">Готово!</Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>Ссылка на ваш профиль <br/> (Не потеряйте ее):</Typography>
      <GlobalLink
        defaultValue={`http://localhost:3000/group/${id}/user-profile/${state.userData.id}`} 
      />
      <LinkProfile href={`/group/${id}/user-profile/${state.userData.id}`} />
    </>
  )
}
 
export default UserDone;