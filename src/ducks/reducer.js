import axios from "axios"

// This is an action constants.
const ADD_LIST = "ADD_LIST"
const REQ_LIST = "REQ_LIST"
const REQ_USER = "REQ_USER"
const REQ_TEAMS = "REQ_TEAMS"
const REQ_BOARDS = "REQ_BOARDS"
const PUSH_UPDATE = "PUSH_UPDATE"
const VIEWING_BOARD = "VIEWING_BOARD"
const ADD_CARD_TEXT_HANDLER = "ADD_CARD_TEXT_HANDLER"
const ADD_LIST_TEXT_HANDLER = "ADD_LIST_TEXT_HANDLER"

// This is my initial state. To start, we'll begin with just an empty user object, the list of boards they can see, and their team list.
const initialState = {
  user: {},
  userBoardList: [],
  userTeamList: [],
  viewingBoard: 1,
  viewingLists: [],
  addCardText: "",
  addListText: ""
}

// My reducer.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_USER:
      return Object.assign({}, state, {
        user: action.payload
      })

    case PUSH_UPDATE:
      return Object.assign({}, state, {
        viewingLists: action.payload,
        addCardText: ""
      })

    case VIEWING_BOARD:
      return Object.assign({}, state, { viewingBoard: action.payload })

    case ADD_CARD_TEXT_HANDLER:
      return Object.assign({}, state, { addCardText: action.payload })

    case ADD_LIST:
      return Object.assign({}, state, {
        viewingBoard: action.payload,
        addListText: ""
      })

    case ADD_LIST_TEXT_HANDLER:
      return Object.assign({}, state, { addListText: action.payload })

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
    case REQ_LIST + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_LIST + "_FULFILLED": // when promise is fulfilled, we can apply the data to state
      return Object.assign({}, state, {
        isLoading: false,
        viewingLists: action.payload
      })

    default:
      return state
  }
}

// Action creators.

/////////// -------   Login functionality  ------- ///////////
export function sendUserInfo(user) {
  return {
    type: REQ_USER,
    payload: user
  }
}

/////////// -------   Board functionality  ------- ///////////

export function getUserBoards(userid) {
  return {
    type: REQ_BOARDS,
    payload: axios
      .get(`/api/getUserBoards/${userid}`)
      .then(response => response.data)
  }
}

export function boardView(board) {
  return {
    type: VIEWING_BOARD,
    payload: board
  }
}

export function boardListUpdater(board) {
  return {
    type: VIEWING_BOARD,
    payload: board
  }
}

/////////// -------   List functionality  ------- ///////////

export function getLists(board) {
  return {
    type: REQ_LIST,
    payload: axios
      .get(`/api/getLists?board=${board}`)
      .then(response => response.data)
  }
}

/////////// -------   Card functionality  ------- ///////////

export function sendUpdate(listId, cards, reducerObj) {
  console.log("move happened in reducer")
  const tempObj = reducerObj
  tempObj[listId].cards = cards
  return {
    type: PUSH_UPDATE,
    payload: tempObj
  }
}

/////////// -------       AddCard/AddList       ------- ///////////
export function addCardTextHandler(e) {
  return {
    type: ADD_CARD_TEXT_HANDLER,
    payload: e.target.value
  }
}

export function addCardSubmit(e, listId, reducerObj, text, cardsId) {
  e.preventDefault()
  const tempObj = reducerObj
  tempObj[listId].cards.push(text)
  e.target.reset()

  // asynchronous, this should happen, shouldn't expect an error, but not to worried either way.
  axios
    .post("/api/addCard", {
      cards: tempObj[listId].cards,
      cardsId
    })
    .then(response => console.log("added card: ", response.data))

  return {
    type: PUSH_UPDATE,
    payload: tempObj
  }
}

export function addListTextHandler(e) {
  return {
    type: ADD_LIST_TEXT_HANDLER,
    payload: e.target.value
  }
}

export function addListSubmit(e, reducerObj, text) {
  e.preventDefault()
  const tempObj = reducerObj
  tempObj.push({ name: text, cards: [] })
  e.target.reset()
  return {
    type: ADD_LIST,
    payload: tempObj
  }
}
