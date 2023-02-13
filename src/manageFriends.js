import { Binding } from "@babel/traverse"

const initialState = {friend: []}
export function manageFriends(state = initialState, action) {
  console.log(state)
  switch(action.type) {
    case 'friends/add':
      return {
        name: state.name,
        hometown: state.hometown,
        id: state.id, 
      }
    case 'friends/remove':
      return
    default:
      return state
  }
}
