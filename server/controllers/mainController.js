let userList = []

let teams = []

let boards = [
  {
    id: 1,
    ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
    allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"]
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
const getUserInfo = () => {

}

module.exports = {
  addToUserList,
  getUserInfo
}