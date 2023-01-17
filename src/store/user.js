import { 
  CREATE_USER, 
  ERROR_USER_FETCH,
  USER_CREATING,
  SAVE_USER_ID,
  CREATE_USER_GIFT,
  RETURN_CREATE_USER,
  RETURN_CREATE_USER_GIFT,
} from "../store/actions/actionTypes"

const initialStateUser = {
  userData: {
    id: null,
    name: "",
    email: "",
    error: false,
    edit: true,
  },
  userGift: {
    age: "",
    gender: "",
    wishes: "",
    error: false,
    edit: false,
  },
  step: 1,
  errorFetch: false,
  userCreating: false,
}

export const user = (state = initialStateUser, action) => {
  switch(action.type) {
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
      } else if (state.step > 1) {
        if (state.step === 2) {
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
            userCreating: false,
          }
        }
        if (state.step === 3) {
          return {
            ...state,
            userData: {
              ...state.userData,
              name: userName,
              email: userEmail,
              edit: false,
            },
            errorFetch: false,
            userCreating: false,
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
          step: 2,
          errorFetch: false,
          userCreating: false,
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
          step: 3,
          userCreating: false,
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
    case ERROR_USER_FETCH: {
      return {
        ...state,
        errorFetch: true,
        userCreating: false,
      }
    }
    case USER_CREATING: {
      return {
        ...state,
        userCreating: true,
      }
    }
    case SAVE_USER_ID: {
      const userId = action.payload.userData.userId

      return {
        ...state,
        userData: {
          ...state.userData,
          id: userId,
        },
      }
    }
    default: {
      return state;
    }
  }
}