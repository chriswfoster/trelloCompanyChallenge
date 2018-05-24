let userList = []

let teams = []

let boards = [
    {
        id: 1,
        ownerId: "U186LBop0RSz9eitxecVQX0HjH42",
        allMembers: ["U186LBop0RSz9eitxecVQX0HjH42"],

    }
]

const addToUserList = function (req, res){
    console.log(userList)
    console.log(req.body.user)
    let listCheck = userList.filter((user)=> {
user.uid === req.body.user.uid
    })
    listCheck.length > 0 ? null :
    userList.push(req.body.user)

    console.log(userList)
    res.status(200).json(req.body.user)

}



module.exports = {
    addToUserList
}