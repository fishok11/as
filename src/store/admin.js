import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_GROUP_OWNER, 
  CREATE_YOUR_GIFT, 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_GROUP_OWNER,
  RETURN_CREATE_YOUR_GIFT,
  SAVE_ID, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
  NAME_UPDATE,
  EVENT_DATE_UPDATE,
  GROUP_OWNER_UPDATE,
} from "../store/actions/actionTypes"

const initialStateAdmin = {
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
  errorFetch: false,
  groupCreating: false,
}

export const admin = (state = initialStateAdmin, action) => {
  switch(action.type) {
    case CREATE_GROUP_NAME: {
      const groupName = action.payload.group.name

      if (groupName === "") {
        return {
          ...state,
          group: {
            ...state.group,
           error: true,
          },
        }
      } else if (state.step > 1) {
        if (state.step === 2) {
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
          }
        }
        if (state.step === 3) {
          return {
            ...state,
            group: {
              ...state.group,
              name: groupName,
              error: false,
              edit: false, 
            },
            groupOwner: {
              ...state.groupOwner,
              edit: true,
            },
          }
        }
        if (state.step === 4) {
          return {
            ...state,
            group: {
              ...state.group,
              name: groupName,
              error: false,
              edit: false, 
            },
            yourGift: {
              ...state.yourGift,
              edit: true,
            },
          }
        }
        if (state.step === 5) {
          return {
            ...state,
            group: {
              ...state.group,
              name: groupName,
              error: false,
              edit: false, 
            },
          }
        }
      } else {
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
      break
    } 
    case CREATE_EVENT_DATE: {
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
      } else if (state.step > 2) {
        if (state.step === 3) {
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
          }
        }
        if (state.step === 4) {
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
            yourGift: {
              ...state.yourGift,
              edit: true,
            },
          }
        }
        if (state.step === 5) {
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
      break
    }
    case CREATE_GROUP_OWNER: {
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
      } else if (state.step > 3) {
        if (state.step === 4) {
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
          }
        }
        if (state.step === 5) {
          return {
            ...state,
            groupOwner: {
              ...state.groupOwner,
              name: groupOwnerName,
              email: groupOwnerEmail,
              edit: false,
            },
          }
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
      break
    }
    case CREATE_YOUR_GIFT: {
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
          groupCreating: false,
        }
      }
    }
    case RETURN_CREATE_GROUP_NAME: {
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
    case RETURN_CREATE_EVENT_DATE: {
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
    case RETURN_CREATE_GROUP_OWNER: {
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
    case RETURN_CREATE_YOUR_GIFT: {
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
    case SAVE_ID: {
      const groupId = action.payload.group.id;

      return {
        ...state,
        group: {
          ...state.group,
          id: groupId,
        },
        groupCreating: false,
      }
    }
    case ERROR_ADMIN_FETCH: {
      return {
        ...state,
        errorFetch: true,
        groupCreating: false,
      }
    }
    case GROUP_CREATING: {
      return {
        ...state,
        groupCreating: true,
      }
    }
    case NAME_UPDATE: {
      const name = action.payload.group.name

      return {
        ...state,
        group:{
          ...state.group,
          name: name,
          error: false,
          edit: false,
        },
        groupCreating: false,
        errorFetch: false,
      }
    }
    case EVENT_DATE_UPDATE: {
      const budget = action.payload.group.eventDate.budget
      const registrationDate = action.payload.group.eventDate.registrationDate
      const drawDate = action.payload.group.eventDate.drawDate
      const exchangeDate = action.payload.group.eventDate.exchangeDate

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
        groupCreating: false,
        errorFetch: false,
      }
    }
    case GROUP_OWNER_UPDATE: {
      const groupOwnerName = action.payload.group.groupOwner.name
      const groupOwnerEmail = action.payload.group.groupOwner.email

      return {
        ...state,
        groupOwner: {
          ...state.groupOwner,
          name: groupOwnerName,
          email: groupOwnerEmail,
          error: false,
          edit: false,
        },
        groupCreating: false,
        errorFetch: false,
      }
    }
    default: {
      return state;
    }
  };
};
