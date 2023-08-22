import { createContext, useReducer } from "react";

const InitialState = {
    id: null,
    name: null,
    email: null,
    photo: 'https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg',
    artist: false
}

const ContextReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo,
                artist: action.payload.artist
            }
        default:
            return state
    }
}

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const value = useReducer(ContextReducer, InitialState)

    return <Context.Provider value={value}> {children} </Context.Provider>
}