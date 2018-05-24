import axios from "axios"

// This is an action creator.
const REQ_USER = "REQ_USER"

// This is my initial state. To start, we'll begin with just an empty user object, the list of boards they can see, and their team list.
const initialState = {
  user: {},
  userBoardList: [],
  userTeamList: []
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
