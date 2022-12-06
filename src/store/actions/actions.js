import { 
  CREATE_GROUP, 
  CREATE_EVENT_DATE, 
  CREATE_GROUP_OWNER, 
  CREATE_YOUR_GIFT, 
  SAVE_ID, 
  SAVE_USER, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
} from "./actionTypes"


export const createGroup = (path) => ({
  type: CREATE_GROUP,
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
  const isUpdate = Boolean(group.id);
  let isError = false;
  return async (dispatch) => {
    try {
      dispatch({type: GROUP_CREATING})
      const response = await fetch('http://localhost:3002/group', {
        method: isUpdate ? 'PUT' : 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(group)
      })
      const data = await response.json()

      if (response.status < 300) {
        dispatch({
          type: CREATE_YOUR_GIFT,
          payload: {
            yourGift: group.yourGift
          },
        });
        if (isUpdate === false) { 
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
};

export const saveId = (path) => ({
  type: SAVE_ID,
  payload: {
    group: path.group
  },
});

export const saveUser = (path) => ({
  type: SAVE_USER,
  payload: {
    userName: path.userName,
    userEmail: path.userEmail
  },
});