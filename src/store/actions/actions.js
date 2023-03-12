import db from '../../firebase'; 
import {
  doc,
  collection, 
  addDoc, 
  updateDoc, 
  // Timestamp, 
  // query, 
  // orderBy, 
  // onSnapshot
} from 'firebase/firestore';
import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_ADMIN_DATA, 
  CREATE_ADMIN_GIFT, 
  SAVE_GROUP_ID, 
  CREATE_USER_DATA, 
  CREATE_USER_GIFT,
  SAVE_USER_ID,
  CLOSE_EDITING_GROUP_NAME,
  CLOSE_EDITING_EVENT_DATE,
  CLOSE_EDITING_USER_DATA,
  CLOSE_EDITING_USER_GIFT,
  RESET_UPDATE_PROFILE,
  SELECT_RECIPIENT,
} from "./actionTypes"
import toast from 'react-hot-toast';
import { mixUsers } from '../../util';
//================================================================================== ACTIONS

//================================= GROUP & ADMIN

export const createGroupName = (path) => ({
  type: CREATE_GROUP_NAME,
  payload: {
    group: path.group
  },
});

export const createEventDate = (path) => ({
  type: CREATE_EVENT_DATE,
  payload: {
    eventDate: path.eventDate,
  },
});

export const createAdminData = (path) => ({
  type: CREATE_ADMIN_DATA,
  payload: {
    userData: path.userData
  },
});

export const createAdminGift = (path) => ({
  type: CREATE_ADMIN_GIFT,
  payload: {
    userGift: path.userGift
  },
});

export const saveGroupId = (path) => ({
  type: SAVE_GROUP_ID,
  payload: {
    group: path.group
  },
});

//================================= USER

export const createUser = (path) => ({
  type: CREATE_USER_DATA,
  payload: {
    userData: path.userData
  }
});

export const createUserGift = (path) => ({
  type: CREATE_USER_GIFT,
  payload: {
    userGift: path.userGift
  }
});

export const saveUserId = (path) => ({
  type: SAVE_USER_ID,
  payload: {
    userData: path.userData
  },
}); 

//================================= EDIT PROFILE

export const closeEditingGroupName = () => ({
  type: CLOSE_EDITING_GROUP_NAME,
});

export const closeEditingEventDate = () => ({
  type: CLOSE_EDITING_EVENT_DATE,
});

export const closeEditingUserData = () => ({
  type: CLOSE_EDITING_USER_DATA,
});

export const closeEditingUserGift = () => ({
  type: CLOSE_EDITING_USER_GIFT,
});

export const resetUpdateProfile = () => ({
  type: RESET_UPDATE_PROFILE,
});

export const resetSelectRecipient = () => ({
  type: SELECT_RECIPIENT,
});

//================================================================================== FETCH

//================================= FETCH GROUP

export const saveGroupName = (path) => {
  const isUpdate = Boolean(path.groupId);

  if (path.group.name !== "" && isUpdate === true) {
    return async(dispatch) => {
      try {
        const docGroup = doc(db, "groups", path.groupId);
        await updateDoc(docGroup, path.group);

        if (path.profile === true) {
          dispatch(closeEditingGroupName());
        } else {
          dispatch(createGroupName({
            group: path.group,
          }));
        }
        toast.success('Группа изменена!');
      } catch (error) {
        toast.error('Ошибка!');
        console.log(error);
      }
    }
  } else {
    return (dispatch) => {
      dispatch(createGroupName({
        group: path.group,
      }));
    }
  }
}

export const saveEventDate = (path) => {
  const isUpdate = Boolean(path.groupId);

  if (path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" ) {
      return async(dispatch) => {
        try {
          if (isUpdate === false) {
            const docGroup = await addDoc(collection(db, "groups"), path.group); 
            dispatch(saveGroupId({
              group: {
                id: docGroup.id
              }
            }));
          } else {
            const docGroup = doc(db, "groups", path.groupId);
            await updateDoc(docGroup, path.group);
          }

          if (path.profile === true) {
            dispatch(closeEditingEventDate());
          } else {
            dispatch(createEventDate({
              eventDate: path.group.eventDate,
            }));
          }

          toast.success(
            isUpdate === true 
            ? 'Группа изменена!' 
            : 'Группа создана!'
          );
        } catch (error) {
          toast.error('Ошибка!');
          console.log(error);
        }
      }
  } else {
    return async(dispatch) => {
      dispatch(createEventDate({
        eventDate: path.group.eventDate,
      }));
    }
  }
}

//================================= FETCH USER

export const saveUserData = (path) => {
  const isUpdate = Boolean(path.userId);

  if (path.user.userData.name !== "" && 
    path.user.userData.email !== "" && 
    isUpdate === true) {
    return async (dispatch) => {
      try {
        const docUser = doc(db, "users", path.userId);
        await updateDoc(docUser, path.user);
  
        if (path.profile === true) {
          dispatch(closeEditingUserData());
        }
        if (path.user.admin === true && path.profile === false) {
          dispatch(createAdminData({
            userData: path.user.userData,
          }));
        }
        if (path.user.admin === false && path.profile === false) {
          dispatch(createUser({
            userData: path.user.userData
          }));
        }
        toast.success ('Ваши данные изменены');
      } catch (error) {
        toast.error('Ошибка!');
        console.log(error);
      }
    }
  } else {
    if (path.user.admin === true) {
      return async (dispatch) => {
        dispatch(createAdminData({
          userData: path.user.userData
        }));
      }
    }
    if (path.user.admin === false) {
      return async (dispatch) => {
        dispatch(createUser({
          userData: path.user.userData
        }));
      }
    }
  }
}

export const saveUserGift = (path) => {
  const isUpdate = Boolean(path.userId);

  if (path.user.userGift.age !== "" && path.user.userGift.gender !== "") {
    return async (dispatch) => {
      try {
        if (isUpdate === false) {
          const docUser = await addDoc(collection(db, "users"), path.user); 
          dispatch(saveUserId({
            userData: {
              userId: docUser.id
            },
          }));
        } else {
          const docUser = doc(db, "users", path.userId);
          await updateDoc(docUser, path.user);
        }

        if (path.profile === true) {
          dispatch(closeEditingUserGift());
        }
        if (path.user.admin === true && path.profile === false) {
          dispatch(createAdminGift({
            userGift: path.user.userGift
          }));
        }
        if (path.user.admin === false && path.profile === false) {
          dispatch(createUserGift({
            userGift: path.user.userGift
          }));
        }
        toast.success(
          isUpdate === true 
          ? 'Ваши данные изменены!' 
          : 'Ваши данные сохранены!'
        );
      } catch (error) {
        toast.error('Ошибка!');
        console.error(error);
      }
    }
  } else {
    if (path.user.admin === true) {
      return async (dispatch) => {
        dispatch(createAdminGift({
          userGift: path.user.userGift
        }));
      }
    }
    if (path.user.admin === false) {
      return async (dispatch) => {
        dispatch(createUserGift({
          userGift: path.user.userGift
        }));
      }
    }
  }
}

export const selectRecipient = (path) => {
  let group = {
    ...path.group,
  }
  if (Object.values(group.recipients).length === 0) {
    const mixUsersArr = mixUsers(path.users);
    path.users.forEach((user, index) => group.recipients[user.id] = mixUsersArr[index].id);
  }
  console.log(group)
  const user = {
    ...path.user,
    recipientId: group.recipients[path.userId],
  }

  return async (dispatch) => {
    try {
      if (Object.values(group.recipients).length === 0) {
        const docGroup = doc(db, "groups", path.groupId);
        await updateDoc(docGroup, group);
      }

      const docUser = doc(db, "users", path.userId);
      await updateDoc(docUser, user);

      dispatch(resetSelectRecipient())
      toast.success ('Получатель выбран!');
    } catch (error) {
      toast.error('Ошибка!');
      console.log(error);
    }
  }
}
