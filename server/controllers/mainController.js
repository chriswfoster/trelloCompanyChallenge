let userList = []

let teams = []

let boards = [
  {
    id: 1,
    name: "first",
    ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
    allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"],
    lists: [
      { name: "primary", cards: ["hi", "test", "whatever"] },
      { name: "lists", cards: ["hi", "test", "whatever"] },
      { name: "here", cards: ["hi", "test", "whatever"] }
    ]
  },
  {
    id: 2,
    name: "second",
    ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
    allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"],
    lists: [
      { name: "primary", cards: ["hi", "test", "whatever"] },
      { name: "lists", cards: ["hi", "test", "whatever"] },
      { name: "here", cards: ["hi", "test", "whatever"] }
    ]
  },
  {
    id: 3,
    name: "third",
    ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
    allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"],
    lists: [
      { name: "primary", cards: ["hi", "test", "whatever"] },
      { name: "lists", cards: ["hi", "test", "whatever"] },
      { name: "here", cards: ["hi", "test", "whatever"] }
    ]
  }
]

const addToUserList = function(req, res) {
  let listCheck = userList.filter(user => {
    user.uid === req.body.user.uid
  })
  listCheck.length > 0 ? null : userList.push(req.body.user)

  console.log(userList)
  res.status(200).json(req.body.user)
}

//Arrow function, for fun I guess.
const getUserInfo = (req, res) => {}

const getTeams = function(req, res) {
  console.log(req.params.id)
}

const getBoards = function(req, res) {
  const dbInstance = app.get('db')

  dbInstance.
  console.log(req.params.id)
  let boardList = boards.filter(board => board.ownerId === req.params.id)
  res.status(200).json(boardList)
}

module.exports = {
  addToUserList,
  getUserInfo,
  getTeams,
  getBoards
}
