import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import GlobalLink from "../../navigation/GlobalLink";
import LinkProfile from "../../navigation/LinkProfile";
import { INDEX_URL } from "../../../util";

const UserDone = () => {
  const state = useSelector(state => state.group)
  
  const {groupId} = useParams();

  return (
    <>
      <Typography variant="h6">Готово!</Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>Ссылка на ваш профиль <br/> (Не потеряйте ее):</Typography>
      <GlobalLink
        defaultValue={`${INDEX_URL}/group/${groupId}/user-profile/${state.userData.id}`} 
      />
      <LinkProfile href={`${INDEX_URL}/group/${groupId}/user-profile/${state.userData.id}`} />
    </>
  )
}
 
export default UserDone;