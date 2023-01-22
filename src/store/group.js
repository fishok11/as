import { 
  CREATE_GROUP_NAME, 
  CREATE_EVENT_DATE, 
  CREATE_ADMIN_DATA, 
  CREATE_ADMIN_GIFT, 
  RETURN_CREATE_GROUP_NAME,
  RETURN_CREATE_EVENT_DATE,
  RETURN_CREATE_ADMIN_DATA,
  RETURN_CREATE_ADMIN_GIFT,
  SAVE_GROUP_ID,
  CREATE_USER, 
  SAVE_USER_ID,
  CREATE_USER_GIFT,
  RETURN_CREATE_USER,
  RETURN_CREATE_USER_GIFT,
  ERROR_FETCH,
  CREATING,
} from "./actions/actionTypes"

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
  userStep: 1,
  saveGroup: false,
  errorFetch: false,
  creating: false,
}

export const group = (state = initialState, action) => {
  switch(action.type) {
    //======================================================== GROUP & ADMIN
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
            creating: false,
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
            creating: false,
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
            creating: false,
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
            creating: false,
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
          creating: false,
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
            creating: false,
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
            creating: false,
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
            creating: false,
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
          creating: false,
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
            creating: false,
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
            creating: false,
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
          creating: false,
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
          creating: false,
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
    case RETURN_CREATE_ADMIN_DATA: {
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
    case RETURN_CREATE_ADMIN_GIFT: {
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
    case SAVE_GROUP_ID: {
      const groupId = action.payload.group.id;

      return {
        ...state,
        group: {
          ...state.group,
          id: groupId,
        },
        creating: false,
      }
    }
    // ========================================================= USER
    case CREATE_USER: {
      const userName = action.payload.userData.name
      const userEmail = action.payload.userData.email

      if (userName === "" || userEmail === "") {
        return {
          ...state,
          userData: {    
            ...state.userData,      
            error: true,
          },
        }
      } else if (state.userStep > 1) {
        if (state.userStep === 2) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userName,
              email: userEmail,
              edit: false,
            },
            userGift: {
              ...state.userGift,
              edit: true,
            },
            errorFetch: false,
            creating: false,
          }
        }
        if (state.userStep === 3) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userName,
              email: userEmail,
              edit: false,
            },
            errorFetch: false,
            creating: false,
          }
        }
      } else {
        return {
          ...state,
          userData: {    
            ...state.userData,      
            name: userName,
            email: userEmail,
            error: false,
            edit: false,
          },
          userGift: {
            edit: true,
          },
          userStep: 2,
          errorFetch: false,
          creating: false,
        }
      }
      break
    } 
    case CREATE_USER_GIFT: {
      const userAge = action.payload.userGift.age
      const userGender = action.payload.userGift.gender
      const userWishes = action.payload.userGift.wishes

      if (userAge === "" || userGender === "") {
        return {
          ...state,
          userGift: {    
            ...state.userGift,      
            error: true,
          },
        }
      } else {
        return {
          ...state,
          userGift: {
            ...state.userGift,  
            age: userAge,
            gender: userGender,
            wishes: userWishes,
            edit: false,
          },
          userStep: 3,
          errorFetch: false,
          creating: false,
        }
      }
    }
    case RETURN_CREATE_USER: {
      return {
        ...state,
        userData: {
          ...state.userData,
          edit: true,
        },
        userGift: {
          ...state.userGift,
          edit: false,
        },
      }
    }
    case RETURN_CREATE_USER_GIFT: {
      return {
        ...state,
        userData: {
          ...state.userData,
          edit: false,
        },
        userGift: {
          ...state.userGift,
          edit: true,
        },
      }
    }
    case SAVE_USER_ID: {
      const userId = action.payload.userData.userId;

      return {
        ...state,
        userData: {
          ...state.userData,
          id: userId,
        },
        creating: false,
      }
    }
    //========================================================== FETCH STATUS
    case ERROR_FETCH: {
      return {
        ...state,
        errorFetch: true,
        creating: false,
      }
    }
    case CREATING: {
      return {
        ...state,
        creating: true,
      }
    }
    default: {
      return state;
    }
  };
};