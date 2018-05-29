let teams = []

const addToUserList = function(req, res) {
  const dbInstance = req.app.get("db")
  console.log("User with this email visited: ", email)
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
              .catch(err => console.log("yourFirstBoard err: ", err))
          })
          .catch(err => console.log("createUser err: ", err))
      } else {
        res.status(200).json(response)
      }
    })
    .catch(err => console.log("getUserInfo err: ", err))
}

//Arrow function, for fun I guess.
const getLists = function(req, res) {
  const dbInstance = req.app.get("db")
  const { board } = req.query

  dbInstance
    .getBoardLists(board)
    .then(response => res.status(200).json(response))
    .catch(err => console.log("getLists err: ", err))
}

const getTeams = function(req, res) {
  // not doing anything with this yet
  // console.log(req.params.id)
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
        .catch(err => console.log("getUserBoards err: ", err))
    })
    .catch(err => console.log("getUserInfo err: ", err))
}

module.exports = {
  addToUserList,
  getTeams,
  getBoards,
  getLists
}
