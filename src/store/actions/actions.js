import { 
  GROUPS_URL, 
  GROUP_URL, 
  USERS_URL, 
  USER_URL 
} from "../../util";
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
  RESET_EDIT_PROFILE,
  RESET_STATE,
  SELECT_RECIPIENT,
} from "./actionTypes"
import toast from 'react-hot-toast';
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

export const saveGroupId = (path) => ({
  type: SAVE_GROUP_ID,
  payload: {
    group: path.group
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

export const resetEditProfile = () => ({
  type: RESET_EDIT_PROFILE,
});

export const resetSelectRecipient = () => ({
  type: SELECT_RECIPIENT,
});

//================================= FETCH STATUS

export const resetState = () => ({
  type: RESET_STATE,
});

//================================================================================== FETCH

//================================= FETCH GROUP

export const saveGroupName = (path) => {
  const isUpdate = Boolean(path.groupId);

  if (path.group.name !=="" && isUpdate === true) {
    return async(dispatch) => {
      try {
        const response = await fetch(GROUP_URL + path.groupId, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.group)
        });
        
        if (response.status < 300) {
          toast.success ('Группа изменена!');
          if (path.profile === true) {
            dispatch(closeEditingGroupName());
          } else {
            dispatch(createGroupName({
              group: path.group,
            }));
          }
        } else if (response.status >= 300) {
          toast.error('Ошибка!');
        };
      } catch (error) {
        toast.error('Ошибка!');
        console.log(error);
      };
    };
  } else {
    return async(dispatch) => {
      dispatch(createGroupName({
        group: path.group,
      }));
    }
  };
};

export const saveEventDate = (path) => {
  const isUpdate = Boolean(path.groupId);

  if (path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" ) {
      return async(dispatch) => {
        try {
          const response = await fetch(isUpdate === true ? GROUP_URL + path.groupId : GROUPS_URL, {
            method: isUpdate === true ? 'PUT' : 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(path.group)
          });
          const data = await response.json();

          if (response.status < 300) {
            toast.success (isUpdate === true ? 'Группа изменена!' : 'Группа создана!');
            if (path.profile === true) {
              dispatch(closeEditingEventDate());
            } else {
              dispatch(createEventDate({
                eventDate: path.group.eventDate,
              }));
            }
            if (path.groupId === null) { 
              dispatch(saveGroupId({
                group: {
                  id: data.id
                }
              }));
            }
          } else if (response.status >= 300) {
            toast.error('Ошибка!');
          };
        } catch (error) {
          toast.error('Ошибка!');
          console.log(error);
        };
      };
  } else {
    return async(dispatch) => {
      dispatch(createEventDate({
        eventDate: path.group.eventDate,
      }));
    };
  };
};

//================================= FETCH USER

export const saveUserData = (path) => {
  const isUpdate = Boolean(path.userId);

  if (path.user.userData.name !=="" && 
    path.user.userData.email !=="" && 
    isUpdate === true) {
    return async (dispatch) => {
      try {
        const response = await fetch(USER_URL + path.userId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.user)
        });
  
        if (response.status < 300) {
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
        } else if (response.status >= 300) {
          toast.error('Ошибка!');
        };
      } catch (error) {
        toast.error('Ошибка!');
        console.log(error);
      };
    };
  } else {
    if (path.user.admin === true) {
      return async (dispatch) => {
        dispatch(createAdminData({
          userData: path.user.userData
        }));
      };
    }
    if (path.user.admin === false) {
      return async (dispatch) => {
        dispatch(createUser({
          userData: path.user.userData
        }));
      };
    }
  };
};

export const saveUserGift = (path) => {
  const isUpdate = Boolean(path.userId);

  if (path.user.userGift.age !== "" && path.user.userGift.gender !== "") {
    return async (dispatch) => {
      try {
        const response = await fetch(isUpdate ===  true ? USER_URL + path.userId : USERS_URL, {
          method: isUpdate ===  true ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.user)
        });
        const data = await response.json();

        if (response.status < 300) {
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
          if (path.userId === null) {
            dispatch(saveUserId({
              userData: {
                userId: data.id
              },
            }));
          }
          toast.success (isUpdate === true ? 'Ваши данные изменены!' : 'Ваши данные сохранены!');
        } else if (response.status >= 300) {
          toast.error('Ошибка!');
        };
      } catch (error) {
        toast.error('Ошибка!');
        console.log(error);
      };
    };
  } else {
    if (path.user.admin === true) {
      return async (dispatch) => {
        dispatch(createAdminGift({
          userGift: path.user.userGift
        }));
      };
    }
    if (path.user.admin === false) {
      return async (dispatch) => {
        dispatch(createUserGift({
          userGift: path.user.userGift
        }));
      };
    }
  };
};

export const selectRecipient = (path) => {
  const rand = arr => {
    const randomUser = Math.floor(Math.random() * arr.length);

    arr = arr.filter((user, i, arr) => {
      if (user.id === Number(path.userId)) {
        return false;
      };
      for (i = 0; i < arr.length; i++) {
        if (user.id === arr[i].recipientId || arr[i].groupId !== Number(path.groupId)) {
          return false;
        };
      };
      return true;
    });
    console.log(arr)
    return arr[randomUser];
  };

  return async (dispatch) => {
    try {
      const response = await fetch(USER_URL + path.userId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          ...path.user,
          recipientId: rand(path.users).id,
        })
      });

      if (response.status < 300) {
        dispatch(resetSelectRecipient())
        toast.success ('Получатель выбран!');
      } else if (response.status >= 300) {
        toast.error('Ошибка!');
      };
    } catch (error) {
      toast.error('Ошибка!');
      console.log(error);
    };
  };
}