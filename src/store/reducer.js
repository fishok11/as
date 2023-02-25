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
  CREATE_USER_DATA, 
  CREATE_USER_GIFT,
  RETURN_CREATE_USER,
  RETURN_CREATE_USER_GIFT,
  SAVE_USER_ID,
  EDIT_GROUP_NAME,
  EDIT_EVENT_DATE,
  EDIT_USER_DATA,
  EDIT_USER_GIFT,
  CLOSE_EDITING_GROUP_NAME,
  CLOSE_EDITING_EVENT_DATE,
  CLOSE_EDITING_USER_DATA,
  CLOSE_EDITING_USER_GIFT,
  RESET_UPDATE_PROFILE,
  SELECT_RECIPIENT,
} from "./actions/actionTypes"

const initialState = {
  group:{
    id: null,
    name: "",
    error: false,
    edit: true,
    editProfile: false,
  },
  eventDate: {
    budget: "",
    registrationDate: "",
    drawDate: "",
    exchangeDate: "",
    error: false,
    edit: false,
    editProfile: false,
  },
  userData: {
    id: null,
    name: "",
    email: "",
    error: false,
    edit: false,
    editProfile: false,
  },
  userGift: {
    age: "",
    gender: "",
    wishes: "",
    error: false,
    edit: false,
    editProfile: false,
  },
  step: 1,
  userStep: 1,
  updateProfile: false,
  recipient: false,
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
            userData: {
              ...state.userData,
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
            userGift: {
              ...state.userGift,
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
          userData: {
            ...state.userData,
            edit: true,
          },
          step: 3,
        }
      }
      break
    }
    case CREATE_ADMIN_DATA: {
      const userName = action.payload.userData.name
      const userEmail = action.payload.userData.email 
      const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      if (userName === "" || userEmail === "" || validEmail.test(userEmail) === false) {
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
              name: userName,
              email: userEmail,
              edit: false,
            },
            userGift: {
              ...state.userGift,
              edit: true,
            },
          }
        }
        if (state.step === 5) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userName,
              email: userEmail,
              edit: false,
            },
          }
        }
      } else {
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
          step: 4,
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
      }
    }
    // ========================================================= USER
    case CREATE_USER_DATA: {
      const userName = action.payload.userData.name
      const userEmail = action.payload.userData.email
      const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      if (userName === "" || userEmail === "" || validEmail.test(userEmail) === false) {
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
      }
    }
    //========================================================== EDIT PROFILE
    case EDIT_GROUP_NAME: {
      return {
        ...state,
        group: {
          ...state.group,
          editProfile: true,
        },
        eventDate: {
          ...state.eventDate,
          editProfile: false,
        },
        userData: {
          ...state.userData,
          editProfile: false,
        },
        userGift: {
          ...state.userGift,
          editProfile: false,
        },
      }
    }
    case EDIT_EVENT_DATE: {
      return {
        ...state,
        group: {
          ...state.group,
          editProfile: false,
        },
        eventDate: {
          ...state.eventDate,
          editProfile: true,
        },
        userData: {
          ...state.userData,
          editProfile: false,
        },
        userGift: {
          ...state.userGift,
          editProfile: false,
        },
      }
    }
    case EDIT_USER_DATA: {
      return {
        ...state,
        group: {
          ...state.group,
          editProfile: false,
        },
        eventDate: {
          ...state.eventDate,
          editProfile: false,
        },
        userData: {
          ...state.userData,
          editProfile: true,
        },
        userGift: {
          ...state.userGift,
          editProfile: false,
        },
      }
    }
    case EDIT_USER_GIFT: {
      return {
        ...state,
        group: {
          ...state.group,
          editProfile: false,
        },
        eventDate: {
          ...state.eventDate,
          editProfile: false,
        },
        userData: {
          ...state.userData,
          editProfile: false,
        },
        userGift: {
          ...state.userGift,
          editProfile: true,
        },
      }
    }
    case CLOSE_EDITING_GROUP_NAME: {
      return {
        ...state,
        group: {
          ...state.group,
          editProfile: false,
        },
        updateProfile: true,
      }
    }
    case CLOSE_EDITING_EVENT_DATE: {
      return {
        ...state,
        eventDate: {
          ...state.eventDate,
          editProfile: false,
        },
        updateProfile: true,
      }
    }
    case CLOSE_EDITING_USER_DATA: {
      return {
        ...state,
        userData: {
          ...state.userData,
          editProfile: false,
        },
        updateProfile: true,
      }
    }
    case CLOSE_EDITING_USER_GIFT: {
      return {
        ...state,
        userGift: {
          ...state.userGift,
          editProfile: false,
        },
        updateProfile: true,
      }
    }
    case RESET_UPDATE_PROFILE: {
      return {
        ...state,
        updateProfile: false,
      }
    }
    case SELECT_RECIPIENT: {
      return {
        ...state,
        recipient: true,
      }
    }
    default: {
      return state;
    }
  }
}
