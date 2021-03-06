let teams = []

const addToUserList = function(req, res) {
  const dbInstance = req.app.get("db")
  const { uid, displayName, email, photoUrl } = req.body.user
  console.log("User with this email visited: ", email)
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
              .catch(err =>
                console.log("addToUserList/yourFirstBoard err: ", err)
              )
          })
          .catch(err => console.log("addToUserList/createUser err: ", err))
      } else {
        res.status(200).json(response)
      }
    })
    .catch(err => console.log("addToUserList/getUserInfo err: ", err))
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
        .catch(err => console.log("getBoards/getUserBoards err: ", err))
    })
    .catch(err => console.log("getBoards/getUserInfo err: ", err))
}

const updateBoardName = function(req, res) {
  const dbInstance = req.app.get("db")
  const { boardId, boardName } = req.body
  dbInstance.updateBoardName(boardId, boardName).then(response => {
    dbInstance
      .getUserBoards(response[0].uid)
      .then(response => res.status(200).json(response))
      .catch(err => console.log("updateBoardName/getUserBoards err: ", err))
  })
}

const createBoard = function(req, res) {
  const dbInstance = req.app.get("db")
  const { boardName, uid } = req.body
  dbInstance
    .getUserInfo(uid)
    .then(response => {
      dbInstance
        .createBoard(boardName, response[0].id)
        .then(response => res.status(200).json(response))
        .catch(err => console.log("createBoard/getUserInfo err: ", err))
    })
    .catch(err => console.log("createBoard/getUserInfo err: ", err))
}

const updateArray = function(req, res) {
  const dbInstance = req.app.get("db")

  const { cardsArr, cardsId } = req.body

  dbInstance
    .updateCardArrays(`{${cardsArr}}`, cardsId)
    .then(response => res.status(200))
    .catch(err => console.log("updateArray err:", err))
}

const addCard = function(req, res) {
  const dbInstance = req.app.get("db")
  const { cards, cardsId } = req.body
  console.log(req.body)

  dbInstance
    .addCard(`{${cards}}`, cardsId)
    .then(response => res.status(200).json(response))
    .catch(err => console.log("addCard err: ", err))
}

const addList = function(req, res) {
  const dbInstance = req.app.get("db")
  const { boardId, listName } = req.body
  console.log(req.body)

  /// I need to make this create a blank {} postgres array similar to addCard.
  dbInstance
    .addList(listName, boardId)
    .then(response => {
      dbInstance
        .insertCard(response[0].id)
        .then(responseTwo => res.status(200).json({list: response, cards: responseTwo}))
    })

    .catch(err => console.log("addList err: ", err))
}

module.exports = {
  addToUserList,
  getTeams,
  getBoards,
  getLists,
  updateBoardName,
  createBoard,
  updateArray,
  addCard,
  addList
}
