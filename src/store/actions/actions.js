import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_GROUP_OWNER, 
  CREATE_YOUR_GIFT, 
  SAVE_ID, 
  SAVE_USER, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
  NAME_UPDATE,
  EVENT_DATE_UPDATE,
  GROUP_OWNER_UPDATE,
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

export const createYourGift = (path) => ({
  type: CREATE_YOUR_GIFT,
  payload: {
    yourGift: path.yourGift
  },
});

export const saveGroupName = (group) => {
  let isError = false;
  const groupUpdate = group.group;

  return async (dispatch) => {
    try {
      dispatch(groupCreating())
      const response = await fetch('http://localhost:3002/group/' + group.groupId, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(groupUpdate)
      })
      
      if (response.status < 300) {
        dispatch(nameUpdate({groupUpdate}));
        return
      } else if (response.status >= 300) {
        isError = true;
      };
    } catch (error) {
      isError = true;
    };
    if (isError === true) {
      dispatch(adminError());
    };
  };
};

export const saveEventDate = (group) => {
  let isError = false;
  const groupUpdate = group.group

  return async (dispatch) => {
    try {
      dispatch(groupCreating())
      const response = await fetch('http://localhost:3002/group/' + group.groupId, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(groupUpdate)
      })

      if (response.status < 300) {
        dispatch(eventDateUpdate({groupUpdate}));
      } else if (response.status >= 300) {
        isError = true;
      };
    } catch (error) {
      isError = true;
    };
    if (isError === true) {
      dispatch(adminError());
    };
  };
};

export const saveGroupOwner = (group) => {
  let isError = false;
  const groupUpdate = group.group

  return async (dispatch) => {
    try {
      dispatch(groupCreating())
      const response = await fetch('http://localhost:3002/group/' + group.groupId, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(groupUpdate)
      })
      
      if (response.status < 300) {
        dispatch(groupOwnerUpdate({groupUpdate}));
      } else if (response.status >= 300) {
        isError = true;
      };
    } catch (error) {
      isError = true;
    };
    if (isError === true) {
      dispatch(adminError());
    };
  };
};

export const saveGroup = (group) => {
  let isError = false;
  const isUpdate = Boolean(group.groupId)

  return async(dispatch) => {
    try {
      dispatch(groupCreating())
      const response = await fetch(isUpdate ? 'http://localhost:3002/group/' + group.groupId :'http://localhost:3002/group', {
        method: isUpdate ? 'PUT' :'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(group.group)
      })
      const data = await response.json()

      if (response.status < 300) {
        dispatch(createYourGift({
          yourGift: group.yourGift
        }));
        if (group.groupId === null) { 
          dispatch(saveId({
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
    };
    if (isError === true) {
      dispatch(adminError());
    };
  }
};

export const saveId = (path) => ({
  type: SAVE_ID,
  payload: {
    group: path.group
  },
});

export const groupCreating = () => ({
  type: GROUP_CREATING,
});

export const adminError = () => ({
  type: ERROR_ADMIN_FETCH,
});

export const nameUpdate = (path) => ({
  type: NAME_UPDATE,
  payload: {
    group: path.groupUpdate
  },
});

export const eventDateUpdate = (path) => ({
  type: EVENT_DATE_UPDATE,
  payload: {
    group: path.groupUpdate
  },
});

export const groupOwnerUpdate = (path) => ({
  type: GROUP_OWNER_UPDATE,
  payload: {
    group: path.groupUpdate
  },
});

export const saveUser = (path) => {
  let isError = false;
  return async (dispatch) => {
    try {
      dispatch(userCreating())
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
      dispatch(userError());
    };
  };
};

export const userCreating = () => ({
  type: USER_CREATING,
});

export const userError = () => ({
  type: ERROR_USER_FETCH,
});