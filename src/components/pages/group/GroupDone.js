import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import GlobalLink from "../../navigation/GlobalLink";
import LinkProfile from "../../navigation/LinkProfile";
import { INDEX_URL } from "../../../util";

const GroupDone = () => {
  const state = useSelector(state => state.group)

  return (
    <div className="g-container__form">
      <Typography variant="h6">Группа готова</Typography>
      <Typography variant="body2">Адрес регистрации участников группы,</Typography>
      <Typography variant="body2" >отправте эту ссылку всем участникам:</Typography>    
      <GlobalLink 
        defaultValue={`${INDEX_URL}/group/${state.group.id}`} 
      />

      <Typography variant="body2" sx={{ textAlign: 'center', mt: '15px' }}>Ссылка на ваш профиль <br/> (Не потеряйте ее):</Typography>
      <GlobalLink 
        defaultValue={`${INDEX_URL}/group/${state.group.id}/user-profile/${state.userData.id}`} 
      />
      <LinkProfile href={`${INDEX_URL}/group/${state.group.id}/user-profile/${state.userData.id}`} />
    </div>
  )
};

export default GroupDone;