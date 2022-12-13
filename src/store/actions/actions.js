import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_GROUP_OWNER, 
  CREATE_YOUR_GIFT, 
  SAVE_ID, 
  SAVE_USER, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
  ERROR_USER_FETCH,
  USER_CREATING,
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
    eventDate: path.eventDate
  },
});

export const createGroupOwner = (path) => ({
  type: CREATE_GROUP_OWNER,
  payload: {
    groupOwner: path.groupOwner
  },
});

export const saveGroup = (group) => {
  let isError = false;

  if (group.groupId !== null) {
    return async(dispatch) => {
      try {
        dispatch({type: GROUP_CREATING})
        const response = await fetch('http://localhost:3002/group/' + group.groupId, {
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group.group)
        })
        
        if (response.status < 300) {
          dispatch({
            type: CREATE_YOUR_GIFT,
            payload: {
              yourGift: group.yourGift
            },
          });
        } else if (response.status >= 300) {
          isError = true;
        };
      } catch (error) {
        isError = true;
      };
      if (isError === true) {
        dispatch({type: ERROR_ADMIN_FETCH});
      };
    };
  } else {
    return async(dispatch) => {
      try {
        dispatch({type: GROUP_CREATING})
        const response = await fetch('http://localhost:3002/group', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(group.group)
        })
        const data = await response.json()

        if (response.status < 300) {
          dispatch({
            type: CREATE_YOUR_GIFT,
            payload: {
              yourGift: group.yourGift
            },
          });
          if (group.groupId === null) { 
            dispatch(saveId({
              group: {
              id: data.id
            }}));
          }
        } else if (response.status >= 300) {
          isError = true;
        };
      } catch (error) {
        isError = true;
      };
      if (isError === true) {
        dispatch({type: ERROR_ADMIN_FETCH});
      };
    };
  }
};

export const saveId = (path) => ({
  type: SAVE_ID,
  payload: {
    group: path.group
  },
});

export const saveUser = (path) => {
  let isError = false;
  return async (dispatch) => {
    try {
      dispatch({type: USER_CREATING})
      const response = await fetch('http://localhost:3002/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(path.user)
      })

      if (response.status < 300) {
        dispatch({
          type: SAVE_USER,
          payload: {
            userName: path.userName,
            userEmail: path.userEmail
          },
        });
      } else if (response.status >= 300) {
        isError = true;
      };
    } catch (error) {
      isError = true;
    };
    if (isError === true) {
      dispatch({type: ERROR_USER_FETCH});
    };
  };
};