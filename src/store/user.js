import { 
  CREATE_USER, 
  ERROR_USER_FETCH,
  USER_CREATING,
  SAVE_USER_ID,
  CREATE_USER_GIFT,
} from "../store/actions/actionTypes"

const initialStateUser = {
  userData: {
    id: null,
    name: "",
    email: "",
    error: false,
  },
  userGift: {
    age: "",
    gender: "",
    wishes: "",
    error: false,
  },
  saveUser: false,
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
      } else {
        return {
          ...state,
          userData: {    
            ...state.userData,      
            name: userName,
            email: userEmail,
            error: false,
          },
          step: 2,
          saveUser: true,
          userCreating: false,
        }
      }
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
            age: userAge,
            gender: userGender,
            wishes: userWishes,
          },
          step: 3,
          saveUser: true,
          userCreating: false,
        }
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
      console.log(userId)

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