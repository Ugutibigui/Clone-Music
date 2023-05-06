import { createContext, useReducer } from "react";

const InitialState = {
    addContent: false
}

const ContextReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STATE":
            return { ...state, addContent: true }  // retorna um novo objeto com addContent = true
        default:
            return state
    }
}

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const value = useReducer(ContextReducer, InitialState)

    return <Context.Provider value={value}> {children} </Context.Provider>
}