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
  const dbInstance = req.app.get("db")
  console.log("hi")
  const { uid, displayName, email, photoUrl } = req.body.user
  dbInstance
    .getUserInfo(uid)
    .then(response => {
      if (response.length < 1) {
        dbInstance
          .createUser(uid, displayName, email, photoUrl)
          .then(response => {
            dbInstance
              .yourFirstBoard("Your first board", response[0].id)
              .then(response => addToUserList(req, res))
              .catch(err => console.log("yourFirstBoard err:", err))
          })
          .catch(err => console.log("createUser err:", err))
      } else {
        res.status(200).json(response)
      }
    })
    .catch(err => console.log("getUserInfo err:", err))
}

//Arrow function, for fun I guess.
const getUserInfo = (req, res) => {}

const getTeams = function(req, res) {
  console.log(req.params.id)
}

const getBoards = function(req, res) {
  const dbInstance = req.app.get("db")
  const { id } = req.params
  dbInstance
    .getUserInfo(id)
    .then(response => {
      dbInstance
        .getUserBoards(response[0].id)
        .then(response => res.status(200).json(response))
        .catch(err => console.log("getUserBoards err:", err))
    })
    .catch(err => console.log("getUserInfo err:", err))
}

module.exports = {
  addToUserList,
  getUserInfo,
  getTeams,
  getBoards
}
