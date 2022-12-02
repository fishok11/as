const initialStateUser = {
  name: "",
  email: "",
  error: false,
  saveUser: false,
  step: 1,
}

export const user = (state = initialStateUser, action) => {
  switch(action.type) {
    case "SAVE_USER": {
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
        }
      }
    }
    default: {
      return state;
    }
  }
}