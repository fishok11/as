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
  ERROR_FETCH,
  CREATING,
  CREATE_USER_DATA, 
  CREATE_USER_GIFT,
  SAVE_USER_ID,
  CLOSE_EDITING_GROUP_NAME,
  CLOSE_EDITING_EVENT_DATE,
  CLOSE_EDITING_USER_DATA,
  CLOSE_EDITING_USER_GIFT,
  RESET_STATE,
} from "./actionTypes"

//======================================================================= ACTIONS

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

export const creating = () => ({
  type: CREATING,
});

export const errorFetch = () => ({
  type: ERROR_FETCH,
});

export const resetState = () => ({
  type: RESET_STATE,
});

//================================================================ FETCH

export const saveGroupName = (path) => {
  let isError = false;
  const groupUpdate = path.group;
  const isUpdate = Boolean(path.groupId);

  if (path.group.name !=="" && isUpdate === true) {
    return async(dispatch) => {
      try {
        dispatch(creating())
        const response = await fetch(GROUP_URL + path.groupId, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(groupUpdate)
        })
        
        if (response.status < 300) {
          if (path.profile === true) {
            dispatch(closeEditingGroupName())
          } else {
            dispatch(createGroupName({
              group: path.group,
            }));
          }
        } else if (response.status >= 300) {
          isError = true;
        };
      } catch (error) {
        isError = true;
        console.log(error)
      };
      if (isError === true) {
        dispatch(errorFetch());
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
  let isError = false;
  const groupUpdate = path.group
  const isUpdate = Boolean(path.groupId);

  if (path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" && 
    path.group.eventDate.budget !=="" ) {
      return async(dispatch) => {
        try {
          dispatch(creating())
          const response = await fetch(isUpdate === true ? GROUP_URL + path.groupId : GROUPS_URL, {
            method: isUpdate === true ? 'PUT' : 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(groupUpdate)
          })
          const data = await response.json()

          if (response.status < 300) {
            if (path.profile === true) {
              dispatch(closeEditingEventDate())
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
            isError = true;
          };
        } catch (error) {
          isError = true;
          console.log(error)
        };
        if (isError === true) {
          dispatch(errorFetch());
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

export const saveUserData = (path) => {
  let isError = false;
  const isUpdate = Boolean(path.userId)
  const userUpdate = path.user

  if (path.user.userData.name !=="" && 
    path.user.userData.email !=="" && 
    isUpdate === true) {
    return async (dispatch) => {
      try {
        dispatch(creating())
        const response = await fetch(USER_URL + path.userId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(userUpdate)
        })
  
        if (response.status < 300) {
          if (path.profile === true) {
            dispatch(closeEditingUserData())
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
        } else if (response.status >= 300) {
          isError = true;
        };
      } catch (error) {
        isError = true;
      };
      if (isError === true) {
        dispatch(errorFetch());
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
  let isError = false;
  const isUpdate = Boolean(path.userId)

  if (path.user.userGift.age !== "" && path.user.userGift.gender !== "") {
    return async (dispatch) => {
      try {
        dispatch(creating())
        const response = await fetch(isUpdate ===  true ? USER_URL + path.userId : USERS_URL, {
          method: isUpdate ===  true ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.user)
        })
        const data = await response.json()
  
        if (response.status < 300) {
          if (path.profile === true) {
            dispatch(closeEditingUserGift())
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
        } else if (response.status >= 300) {
          isError = true;
        };
      } catch (error) {
        isError = true;
      };
      if (isError === true) {
        dispatch(errorFetch());
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