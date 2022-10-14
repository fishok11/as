import { createContext, useReducer } from "react"

const initialState = {
  groupName: "",
  groupCreateError: false,
  showGroupNameLink: false,
  budget: "",
  registrationDate: "",
  drawDate: "",
  exchangeDate: "",
  eventDateError: false,
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
          groupName: groupName,
          groupCreateError: false,
          showGroupNameLink: true,
        }
      }
    }
    case "RETURN_CREATE_GROUP_NAME": {
      return {
        ...state,
        showGroupNameLink: false,
      }
    }
    case "CREATE_DATE_OF_EVENT": {
      const budget = action.payload.budget
      const registrationDate = action.payload.registrationDate
      const drawDate = action.payload.drawDate
      const exchangeDate = action.payload.exchangeDate

      if (budget === "" 
      || registrationDate === "" 
      || drawDate === "" 
      || exchangeDate === "") {
        return {
          ...state,
          eventDateError: true,
        }
      } else {
        console.log(state)
        return {
          ...state,
          budget: budget,
          registrationDate: registrationDate,
          drawDate: drawDate,
          exchangeDate: exchangeDate,
          eventDateError: false,
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