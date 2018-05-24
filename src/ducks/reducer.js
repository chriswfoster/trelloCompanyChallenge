import axios from "axios"

// This is an action creator.
const REQ_USER = "REQ_USER"

// This is my initial state. To start, we'll begin with just an empty user object, the list of boards they can see, and their team list.
const initialState = {
  user: {
    apiKey: "AIzaSyDn3EtOO_2VNIJm0dYcPa1rwTSWtVw0Yf0",
    appName: "[DEFAULT]",
    authDomain: "first-firebase-project-chriswf.firebaseapp.com",
    createdAt: "1527196304000",
    displayName: "Chris Foster",
    email: "chriswfoster@gmail.com",
    emailVerified: true,
    isAnonymous: false,
    lastLoginAt: "1527200429000",
    phoneNumber: null,
    photoURL:
      "https://lh6.googleusercontent.com/-YIpmQYsRY1Y/AAAAAAAAAAI/AAAAAAAABWU/CcSYiVMC5W0/photo.jpg",
    redirectEventId: null,
    stsTokenManager: {
      apiKey: "AIzaSyDn3EtOO_2VNIJm0dYcPa1rwTSWtVw0Yf0",
      refreshToken:
        "AK2wQ-yHYx5KhXmcUaUY_pzbN7hFQpwVbGtBU5imZ7seLUvfLt…VxzBKKZmN1AIq6oMKjwIjyffzdYZ22UZ_0tJok7qaSuxdpCww",
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyMDUwYzMxN2ExMjJlZD…fV-2Kac4UXIu1DDQZerXw7ZNkhk4tlKNSxBAaFq9VunE12_fQ",
      expirationTime: 1527204029319
    },
    uid: "U186LBop0RSz9eitxecVQX0HjH42"
  },
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
export function getUserInfo(userid) {
    return {
      type: REQ_USER,
      payload: axios.get(`/api/getUserInfo/${userid}`)
      .then(response => console.log(response.data))
    }
  }