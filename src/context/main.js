import { createContext, useReducer } from "react"

const initialState = {
  groupName: "",
  groupCreateError: false,
  showGroupName: true,
  showGroupNameLink: false,
  eventDate: {
    budget: "",
    registrationDate: "",
    drawDate: "",
    exchangeDate: "",
    eventDateError: false,
    showEventDate: true,
    showEventDateLink: false,
  },
  groupOwner: {
    groupOwnerName: "",
    groupOwnerEmail: "",
    groupOwnerError: false,
    showGroupOwner: true,
    showGroupOwnerLink: false,
  },
}

const reducer = (state = initialState, action) => {
  console.log(state)
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
          showGroupName: false,
        }
      }
    }
    case "RETURN_CREATE_GROUP_NAME": {
      return {
        ...state,
        showGroupName: true,
      }
    }
    case "CREATE_DATE_OF_EVENT": {
      const budget = action.payload.eventDate.budget
      const registrationDate = action.payload.eventDate.registrationDate
      const drawDate = action.payload.eventDate.drawDate
      const exchangeDate = action.payload.eventDate.exchangeDate

      if (budget === "" 
      || registrationDate === "" 
      || drawDate === "" 
      || exchangeDate === "") {
        return {
          ...state,
          eventDate: {
            ...state.eventDate,
            eventDateError: true,
          }
        }
      } else {
        return {
          ...state,
          eventDate: {
            budget: budget,
            registrationDate: registrationDate,
            drawDate: drawDate,
            exchangeDate: exchangeDate,
            eventDateError: false,
            showEventDateLink: true,
            showEventDate: false,
          }
        }
      }
      
    }
    case "RETURN_CREATE_EVENT_DATE": {
      return {
        ...state,
        eventDate:{  
          ...state.eventDate,     
          showEventDate: true,
        },
        showGroupName: false,
      }
    }
    case "SAVE_GROUP_OWNER": {
      const groupOwnerName = action.payload.groupOwner.groupOwnerName
      const groupOwnerEmail = action.payload.groupOwner.groupOwnerEmail

      if (groupOwnerName === "" || groupOwnerEmail === "") {
        return {
          ...state,
          groupOwner: {
            ...state.groupOwner,
            groupOwnerError: true,
          },
        }
      } else {
        return {
          ...state,
          groupOwner: {
            groupOwnerName: groupOwnerName,
            groupOwnerEmail: groupOwnerEmail,
            showGroupOwner: false,
            showGroupOwnerLink: true,
          },
        }
      }
    }
    case "RETURN_GROUP_OWNER": {
      return {
        ...state,
        groupOwner: {
          ...state.groupOwner,
          showGroupOwner: true,
        },
        eventDate:{  
          ...state.eventDate,     
          showEventDate: false,
        },
        showGroupName: false,
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