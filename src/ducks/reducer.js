import axios from "axios"

// This is an action creator. 
const REQ_USER = "REQ_USER";

// This is my initial state. To start, we'll begin with just an empty user object.
const initialState = {
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })

    default:
      return state
  }
}

export function getUserInfo() {
  return {
    type: REQ_USER,
    payload: axios.get("/api/me").then(response => {
        return response;
    })
  }
}
