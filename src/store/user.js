import { 
  CREATE_USER, 
  ERROR_USER_FETCH,
  USER_CREATING,
  SAVE_USER_ID,
} from "../store/actions/actionTypes"

const initialStateUser = {
  id: null,
  name: "",
  email: "",
  wishes: "",
  error: false,
  saveUser: false,
  step: 1,
  errorFetch: false,
  userCreating: false,
}

export const user = (state = initialStateUser, action) => {
  switch(action.type) {
    case CREATE_USER: {
      const userName = action.payload.userName
      const userEmail = action.payload.userEmail
      const userWishes = action.payload.userWishes

      if (userName === "" || userName === "") {
        return {
          ...state,
          error:true,
        }
      } else {
        return {
          ...state,
          name: userName,
          email: userEmail,
          wishes: userWishes,
          step: 2,
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
      const userId = action.payload.userId
      console.log(userId)
      return {
        ...state,
        id: userId,
      }
    }
    default: {
      return state;
    }
  }
}