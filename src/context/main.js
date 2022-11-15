import { createContext, useReducer } from "react"

const initialState = {
  group:{
    id: null,
    name: "",
    error: false,
    edit: true,
  },
  eventDate: {
    budget: "",
    registrationDate: "",
    drawDate: "",
    exchangeDate: "",
    error: false,
    edit: false,
  },
  groupOwner: {
    name: "",
    email: "",
    error: false,
    edit: false,
  },
  yourGift: {
    age: "",
    gender: "",
    wishes: "",
    error: false,
    edit: false,
  },
  step: 1,
  saveGroup: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GROUP_CREATED": {
      const groupName = action.payload.group.name

      if (groupName === "") {
        return {
          ...state,
          group: {
            ...state.group,
           error: true,
          },
        }
      } else if (groupName !== "") {
        return {
          ...state,
          group: {
            ...state.group,
            name: groupName,
            error: false,
            edit: false, 
          },
          eventDate: {
            ...state.eventDate,
            edit: true,
          },
          step: 2,
        }
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
            error: true,
          }
        }
      } else {
        return {
          ...state,
          eventDate: {
            ...state.eventDate,
            budget: budget,
            registrationDate: registrationDate,
            drawDate: drawDate,
            exchangeDate: exchangeDate,
            error: false,
            edit: false,
          },
          groupOwner: {
            ...state.groupOwner,
            edit: true,
          },
          step: 3,
        }
      }
    }
    case "CREATE_GROUP_OWNER": {
      const groupOwnerName = action.payload.groupOwner.name
      const groupOwnerEmail = action.payload.groupOwner.email

      if (groupOwnerName === "" || groupOwnerEmail === "") {
        return {
          ...state,
          groupOwner: {
            ...state.groupOwner,
            error: true,
          },
        }
      } else {
        return {
          ...state,
          groupOwner: {
            ...state.groupOwner,
            name: groupOwnerName,
            email: groupOwnerEmail,
            edit: false,
          },
          yourGift: {
            ...state.yourGift,
            edit: true,
          },
          step: 4,
        }
      }
    }
    case "CREATE_YOUR_GIFT": {
      const giftGender = action.payload.yourGift.gender
      const giftAge = action.payload.yourGift.age
      const giftWishes = action.payload.yourGift.wishes

      if (giftGender === "" 
      || giftAge === "" 
      || giftAge === "") {
        return {
          ...state,
          yourGift : {
            ...state.yourGift,
            error: true,
          }
        }
      } else {
        return {
          ...state,
          yourGift: {
            ...state.yourGift,
            age: giftAge,
            gender: giftGender,
            wishes: giftWishes,
            error: false,
            edit: false,
          },
          step: 5,
          saveGroup: true,
        }
      }
    }
    case "RETURN_CREATE_GROUP_NAME": {
      return {
        ...state,
        group: {
          ...state.group,
          edit: true,
        },
        eventDate: {
          ...state.eventDate,
          edit: false,
        },
        groupOwner: {
          ...state.groupOwner,
          edit: false,
        },
        yourGift: {
          ...state.yourGift,
          edit: false,
        },
      }
    }
    case "RETURN_CREATE_EVENT_DATE": {
      if (state.step >= 2) {
        return {
          ...state,
          group: {
            ...state.group,
            edit: false,
          },
          eventDate: {
            ...state.eventDate,
            edit: true,
          },
          groupOwner: {
            ...state.groupOwner,
            edit: false,
          },
          yourGift: {
            ...state.yourGift,
            edit: false,
          },
        }
      } else {
        return {
          ...state
        }
      }

    }
    case "RETURN_CREATE_GROUP_OWNER": {
      if (state.step >= 3) {
        return {
          ...state,
          group: {
            ...state.group,
            edit: false,
          },
          eventDate: {
            ...state.eventDate,
            edit: false,
          },
          groupOwner: {
            ...state.groupOwner,
            edit: true,
          },
          yourGift: {
            ...state.yourGift,
            edit: false,
          },
        }
      } else {
        return {
          ...state
        }
      }
    }
    case "RETURN_CREATE_YOUR_GIFT": {
      if (state.step >= 4) {
        return {
          ...state,
          group: {
            ...state.group,
            edit: false,
          },
          eventDate: {
            ...state.eventDate,
            edit: false,
          },
          groupOwner: {
            ...state.groupOwner,
            edit: false,
          },
          yourGift: {
            ...state.yourGift,
            edit: true,
          },
        }
      } else {
        return {
          ...state
        }
      }
    }
    case "SAVE_ID": {
      const groupId = action.payload.group.id;

      return {
        ...state,
        group: {
          ...state.group,
          id: groupId,
        },
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