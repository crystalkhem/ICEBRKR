import { createContext, useReducer } from 'react';

export const ProfilesContext = createContext()

export const profilesReducer = (state, action) => {
  switch(action.type) {
    case 'SET_PROFILES':
      return {
        events: action.payload
      }
    default:
      return state
  }
}

export const ProfilesContextProvider = ( { children }) => {
  const [state, dispatch] = useReducer(profilesReducer, {
    profiles: null
  })
  return (
    <ProfilesContext.Provider value={{...state, dispatch}}>
      { children } 
    </ProfilesContext.Provider>
  )
}