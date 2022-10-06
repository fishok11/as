import { createContext, useReducer } from "react"

const initialState = {
    showGroupCreated: false,
}

const reducer = (state, action) => {
    const inputValue = document.getElementsByClassName(".main-input")

    switch(action.type) {
        case "GROUP_CREATED": {
            if (inputValue.value === "") {
                return
            } else {
                return {
                    showGroupCreated: true,
                }
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