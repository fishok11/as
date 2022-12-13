import Step from "./Step";
import { useSelector } from "react-redux";
import { 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_GROUP_OWNER,
  RETURN_CREATE_YOUR_GIFT,
} from "../../store/actions/actionTypes"

const ReturnToEdit = () => {
  const state = useSelector(state => state.admin)
  const groupEdit = state.group.edit ? "edit" : "";
  const eventDateEdit = state.eventDate.edit ? "edit" : "";
  const groupOwnerEdit = state.groupOwner.edit ? "edit" : "";
  const yourGiftEdit = state.yourGift.edit ? "edit" : "";
  const currentPageGroup = state.step >= 1 ? "current" : "";
  const currentEventDate = state.step >= 2 ? "current" : "";
  const currentGroupOwner = state.step >= 3 ? "current" : "";
  const currentYourGift = state.step >= 4 ? "current" : "";

  return (
    <div className="ReturnToEdit-container">
      <Step number="1" action={RETURN_CREATE_GROUP_NAME} className={`g-link ${groupEdit} ${currentPageGroup}`}/>
      <Step number="2" action={RETURN_CREATE_EVENT_DATE} className={`g-link ${eventDateEdit} ${currentEventDate}`}/>
      <Step number="3" action={RETURN_CREATE_GROUP_OWNER} className={`g-link ${groupOwnerEdit} ${currentGroupOwner}`}/>
      <Step number="4" action={RETURN_CREATE_YOUR_GIFT} className={`g-link ${yourGiftEdit} ${currentYourGift}`}/>
    </div>
  )
}

export default ReturnToEdit;