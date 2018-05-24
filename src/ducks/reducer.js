import axios from "axios"

// This is an action creator.
const REQ_USER = "REQ_USER"

// This is my initial state. To start, we'll begin with just an empty user object.
const initialState = {
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER:
      return Object.assign({}, state, {
        user: action.payload
      })

    default:
      return state
  }
}

export function sendUserInfo(user) {
  return {
    type: REQ_USER,
    payload: user
  }
}
