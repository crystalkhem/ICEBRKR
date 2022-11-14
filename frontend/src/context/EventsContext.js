import { createContext, useReducer } from 'react';

export const EventsContext = createContext()

export const eventsReducer = (state, action) => {
  switch(action.type) {
    case 'SET_EVENTS':
      return {
        events: action.payload
      }
    case 'CREAT_EVENT':
      return {
        events: [action.payload, ...state.workouts]
      }
    case 'DELETE_EVENT':
      return {
        workouts: state.events.filter((e) =>e._id !==action.payload._id)
      }
    default:
      return state
  }
}

export const EventsContextProvider = ( { children }) => {
  const [state, dispatch] = useReducer(eventsReducer, {
    events: null
  })
  return (
    <EventsContext.Provider value={{...state, dispatch}}>
      { children } 
    </EventsContext.Provider>
  )
}