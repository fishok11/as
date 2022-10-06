import { createContext, useReducer } from "react"

const initialState = {
  showGroupCreated: false,
}

const reducer = (state, action) => {
  switch(action.type) {
    case "GROUP_CREATED": {
      const input = document.querySelector(".main-input")

      console.log(input.value)

      if (input.value === "") {
        return initialState
      } else {
        return {
          showGroupCreated: true,
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