import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_ADMIN_DATA, 
  CREATE_ADMIN_GIFT, 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_GROUP_OWNER,
  RETURN_CREATE_YOUR_GIFT,
  SAVE_ID,
  SAVE_ADMIN_ID, 
  ERROR_ADMIN_FETCH,
  GROUP_CREATING,
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
  userData: {
    id: null,
    name: "",
    email: "",
    error: false,
    edit: false,
  },
  userGift: {
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
            errorFetch: false,
            groupCreating: false,
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
            userData: {
              ...state.userData,
              edit: true,
            },
            errorFetch: false,
            groupCreating: false,
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
            userGift: {
              ...state.userGift,
              edit: true,
            },
            errorFetch: false,
            groupCreating: false,
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
            errorFetch: false,
            groupCreating: false,
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
          errorFetch: false,
          groupCreating: false,
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
            userData: {
              ...state.userData,
              edit: true,
            },
            errorFetch: false,
            groupCreating: false,
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
            userGift: {
              ...state.userGift,
              edit: true,
            },
            errorFetch: false,
            groupCreating: false,
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
            errorFetch: false,
            groupCreating: false,
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
          userData: {
            ...state.userData,
            edit: true,
          },
          step: 3,
          errorFetch: false,
          groupCreating: false,
        }
      }
      break
    }
    case CREATE_ADMIN_DATA: {
      const userDataName = action.payload.userData.name
      const userDataEmail = action.payload.userData.email 

      if (userDataName === "" || userDataEmail === "") {
        return {
          ...state,
          userData: {
            ...state.userData,
            error: true,
          },
        }
      } else if (state.step > 3) {
        if (state.step === 4) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userDataName,
              email: userDataEmail,
              edit: false,
            },
            userGift: {
              ...state.userGift,
              edit: true,
            },
            errorFetch: false,
            groupCreating: false,
          }
        }
        if (state.step === 5) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userDataName,
              email: userDataEmail,
              edit: false,
            },
            errorFetch: false,
            groupCreating: false,
          }
        }
      } else {
        return {
          ...state,
          userData: {
            ...state.userData,
            name: userDataName,
            email: userDataEmail,
            edit: false,
          },
          userGift: {
            ...state.userGift,
            edit: true,
          },
          step: 4,
          errorFetch: false,
          groupCreating: false,
        }
      }
      break
    }
    case CREATE_ADMIN_GIFT: {
      const giftGender = action.payload.userGift.gender
      const giftAge = action.payload.userGift.age
      const giftWishes = action.payload.userGift.wishes
 
      if (giftGender === "" 
      || giftAge === "" 
      || giftAge === "") {
        return {
          ...state,
          userGift : {
            ...state.userGift,
            error: true,
          }
        }
      } else {
        return {
          ...state,
          userGift: {
            ...state.userGift,
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
        userData: {
          ...state.userData,
          edit: false,
        },
        userGift: {
          ...state.userGift,
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
          userData: {
            ...state.userData,
            edit: false,
          },
          userGift: {
            ...state.userGift,
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
          userData: {
            ...state.userData,
            edit: true,
          },
          userGift: {
            ...state.userGift,
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
          userData: {
            ...state.userData,
            edit: false,
          },
          userGift: {
            ...state.userGift,
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
    case SAVE_ADMIN_ID: {
      const userId = action.payload.userData.id;

      return {
        ...state,
        userData: {
          ...state.userData,
          id: userId,
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
    default: {
      return state;
    }
  };
};
