import { 
  CREATE_USER, 
  ERROR_USER_FETCH,
  USER_CREATING,
} from "../store/actions/actionTypes"

const initialStateUser = {
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

      if (userName === "" || userName === "") {
        console.log(state, 1)
        return {
          ...state,
          error:true,
        }
      } else {
        return {
          ...state,
          name: userName,
          email: userEmail,
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
    default: {
      return state;
    }
  }
}