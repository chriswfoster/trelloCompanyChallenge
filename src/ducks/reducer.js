import axios from "axios"
import update from 'immutability-helper';

// This is an action creator.
const REQ_USER = "REQ_USER"
const REQ_BOARDS = "REQ_BOARDS"
const REQ_TEAMS = "REQ_TEAMS"
const VIEWING_BOARD = "VIEWING_BOARD"

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
  userTeamList: [],
  viewingBoard: {/////////// --------------////////////// delete the filler data below
    id: 1,
    name: "first",
    ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
    allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"],
    lists: [
      { name: "primary", cards: ["hi", "test", "whatever", "really really long string just to see what this thing does under a big string load such at this"] },
      { name: "lists", cards: ["hi", "test", "whatever"] },
      { name: "here", cards: ["hi", "test", "whatever"] }
    ]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER:
      return Object.assign({}, state, {
        user: action.payload
      })
    case REQ_BOARDS + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_BOARDS + "_FULFILLED": // when promise is fulfilled, we can apply the data to state
      return Object.assign({}, state, {
        isLoading: false,
        userBoardList: action.payload
      })
    case REQ_TEAMS + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case REQ_TEAMS + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        userTeamList: action.payload
      })
    case VIEWING_BOARD:
      return Object.assign({}, state, { viewingBoard: action.payload })

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
export function getUserBoards(userid) {
  return {
    type: REQ_BOARDS,
    payload: axios
      .get(`/api/getUserBoards/${userid}`)
      .then(response => response.data)
  }
}
export function getUserTeams(userid) {
  return {
    type: REQ_TEAMS,
    payload: axios
      .get(`/api/getUserTeams/${userid}`)
      .then(response => console.log(response.data))
  }
}
export function boardView(board) {
  return {
    type: VIEWING_BOARD,
    payload: board
  }
}




/////////// ------- card functionality ------ /////////
export function moveCard(dragIndex, hoverIndex, cards) {
    // const { cards } = this.state;		
console.log(cards)
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
        cards: {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard]
            ]
        }
    }));
}

export function pushCard(card) {
    this.setState(update(this.state, {
        cards: {
            $push: [ card ]
        }
    }));
}

export function removeCard(index) {		
    this.setState(update(this.state, {
        cards: {
            $splice: [
                [index, 1]
            ]
        }
    }));
}
