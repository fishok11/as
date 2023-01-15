import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_GROUP_OWNER, 
  CREATE_YOUR_GIFT, 
  SAVE_ID, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
  CREATE_USER, 
  ERROR_USER_FETCH,
  USER_CREATING,
  SAVE_USER_ID
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

export const saveGroupName = (path) => {
  let isError = false;
  const groupUpdate = path.group;
  const isUpdate = Boolean(path.groupId);

  if (path.group.name !== "" && isUpdate === true) {
    return async(dispatch) => {
      try {
        dispatch(groupCreating())
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
        dispatch(adminError());
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

  if (path.group.eventDate.budget !== "" && 
    path.group.eventDate.budget !== "" && 
    path.group.eventDate.budget !== "" && 
    path.group.eventDate.budget !== "" &&
    isUpdate === true) {
      return async(dispatch) => {
        try {
          dispatch(groupCreating())
          const response = await fetch('http://localhost:3002/group/' + path.groupId, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(groupUpdate)
          })
    
          if (response.status < 300) {
            dispatch(createEventDate({
              eventDate: path.group.eventDate,
            }));
          } else if (response.status >= 300) {
            isError = true;
          };
        } catch (error) {
          isError = true;
          console.log(error)
        };
        if (isError === true) {
          dispatch(adminError());
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

export const saveGroupOwner = (path) => { 
  let isError = false;
  const groupUpdate = path.group
  const isUpdate = Boolean(path.groupId);

  if (path.group.groupOwner.name !== "" && 
    path.group.groupOwner.name !== "" && 
    isUpdate === true) {
      return async(dispatch) => {
        try {
          dispatch(groupCreating())
          const response = await fetch('http://localhost:3002/group/' + path.groupId, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(groupUpdate)
          })
          
          if (response.status < 300) {
            dispatch(createGroupOwner({
              groupOwner: path.group.groupOwner,
            }));
          } else if (response.status >= 300) {
            isError = true;
          };
        } catch (error) {
          isError = true;
          console.log(error)
        };
        if (isError === true) {
          dispatch(adminError());
        };
      };
  } else {
    return async(dispatch) => {
      dispatch(createGroupOwner({
        groupOwner: path.group.groupOwner,
      }));
    };
  };
};

export const saveGroup = (path) => {
  let isError = false;
  const isUpdate = Boolean(path.groupId)

  if (path.group.yourGift.age !== "" && path.group.yourGift.gender !== "") {
    return async(dispatch) => {
      try {
        dispatch(groupCreating())
        const response = await fetch(isUpdate ? 'http://localhost:3002/group/' + path.groupId : 'http://localhost:3002/group', {
          method: isUpdate ? 'PUT' :'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.group)
        })
        const data = await response.json()
  
        if (response.status < 300) {
          dispatch(createYourGift({
            yourGift: path.group.yourGift
          }));
          if (path.groupId === null) { 
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
  } else {
    return async(dispatch) => {
      dispatch(createYourGift({
        yourGift: path.group.yourGift
      }));
    };
  };
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

// ===================================================================================

export const createUser = (path) => ({
  type: CREATE_USER,
  payload: {
    userName: path.userName,
    userEmail: path.userEmail,
    userWishes: path.userWishes,
  }
});

export const saveUser = (path) => {
  let isError = false;
  const isUpdate = Boolean(path.userId)
  
  if (path.user.name !== "" && path.user.email !== "") {
    return async (dispatch) => {
      try {
        dispatch(userCreating())
        const response = await fetch(isUpdate === true ? 'http://localhost:3002/users' + path.userId : 'http://localhost:3002/users', {
          method: isUpdate ? 'PUT' :'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(path.user)
        })
        const data = await response.json()
  
        if (response.status < 300) {
          dispatch(createUser({
            userName: path.user.name,
            userEmail: path.user.email,
            userWishes: path.user.wishes,
          }));
          if (path.userId === null) {
            dispatch(saveUserId({
              userId: data.id
            }))
          }
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
  } else {
    return async (dispatch) => {
      dispatch(createUser({
        userName: path.user.name,
        userEmail: path.user.email,
        userWishes: path.user.wishes,
      }));
    };
  };
};

export const saveUserId = (path) => ({
  type: SAVE_USER_ID,
  payload: {
    userId: path.userId
  },
});

export const userCreating = () => ({
  type: USER_CREATING,
});

export const userError = () => ({
  type: ERROR_USER_FETCH,
});