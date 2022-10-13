import { createContext, useReducer } from "react"

const initialState = {
  showGroupCreated: false,
  groupName: "",
  groupCreateError: false,
  groupOwner: {
    groupOwnerName: "",
    groupOwnerEmail: "",
  },
  groupOwnerError: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GROUP_CREATED": {
      const groupName = action.payload.groupName

      if (groupName === "") {
        return {
          ...state,
          groupCreateError: true,
        }
      } else {
        return {
          ...state,
          showGroupCreated: true,
          groupName: groupName,
          groupCreateError: false,
        }
      }
    }
    case "SAVE_GROUP_OWNER": {
      const groupOwnerName = action.payload.groupOwner.groupOwnerName

      const groupOwnerEmail = action.payload.groupOwner.groupOwnerEmail

      if (groupOwnerName === "" || groupOwnerEmail === "") {
        return {
          ...state,
          groupOwnerError: true,
        }
      } else {
        console.log(state)
        return {
          ...state,
          groupOwner: {
            groupOwnerName: groupOwnerName,
            groupOwnerEmail: groupOwnerEmail,
          },
          groupOwnerError: false,
        }
      }
    }
    default: {
      return state;
    }
  }
}

export const GroupContext = createContext()

export const GroupProvider = ({children}) => {
  const value = useReducer(reducer, initialState)

  return (
    <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
  );
};