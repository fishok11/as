import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_ADMIN_DATA, 
  CREATE_ADMIN_GIFT, 
  SAVE_GROUP_ID, 
  ERROR_FETCH,
  CREATING,
  CREATE_USER, 
  CREATE_USER_GIFT,
  SAVE_USER_ID,
} from "./actionTypes"


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

export const saveGroupName = (path) => {
  let isError = false;
  const groupUpdate = path.group;
  const isUpdate = Boolean(path.groupId);

  if (path.group.name !=="" && isUpdate === true) {
    return async(dispatch) => {
      try {
        dispatch(creating())
        const response = await fetch('http://localhost:3002/group/' + path.groupId, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(groupUpdate)
        })
        
        if (response.status < 300) {
          dispatch(createGroupName({
            group: path.group,
          }));
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
          const response = await fetch(isUpdate === true ? 'http://localhost:3002/group/' + path.groupId : 'http://localhost:3002/group', {
            method: isUpdate === true ? 'PUT' : 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(groupUpdate)
          })
          const data = await response.json()

          if (response.status < 300) {
            dispatch(createEventDate({
              eventDate: path.group.eventDate,
            }));
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

export const saveGroupId = (path) => ({
  type: SAVE_GROUP_ID,
  payload: {
    group: path.group
  },
});

export const creating = () => ({
  type: CREATING,
});

export const errorFetch = () => ({
  type: ERROR_FETCH,
});

// ===================================================================================

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
  type: CREATE_USER,
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
        const response = await fetch('http://localhost:3002/users/' + path.userId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(userUpdate)
        })
  
        if (response.status < 300) {
          if (path.user.admin === true) {
            dispatch(createAdminData({
              userData: path.user.userData,
            }));
          }
          if (path.user.admin === false) {
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
        const response = await fetch(isUpdate ===  true ? 'http://localhost:3002/users/' + path.userId : 'http://localhost:3002/users', {
          method: isUpdate ===  true ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.user)
        })
        const data = await response.json()
  
        if (response.status < 300) {
          if (path.user.admin === true) {
            dispatch(createAdminGift({
              userGift: path.user.userGift
            }));
          }
          if (path.user.admin === false) {
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

export const saveUserId = (path) => ({
  type: SAVE_USER_ID,
  payload: {
    userData: path.userData
  },
});