const { json } = require("body-parser")
const express = require("express")
const massive = require("massive")
const cors = require("cors")
const ctrl = require("./controllers/mainController")
require("dotenv").config()

const PORT = 3344

const app = express()
app.use(json())
app.use(cors())

// I decided to add massive to my project
// I was having difficulty getting the nested data in Redux to rerender properly.
const massiveConnection = massive(process.env.connectionString) // On this line I tell massive to make the connection
  .then(db => app.set("db", db)) // if connection exists, set 'db' to db
  .catch(console.log) //  log an error if exists

app.use(express.static(`${__dirname}/../build`))

app.get("/api/getUserBoards/:id", ctrl.getBoards)
app.get("/api/getUserTeams/:id", ctrl.getTeams)
app.get("/api/getLists", ctrl.getLists)
app.put("/api/updateBoardName", ctrl.updateBoardName)
app.post("/api/addToUserList", ctrl.addToUserList)
app.post('/api/addCard', ctrl.addCard)
app.post('/api/createBoard', ctrl.createBoard)
app.put('/api/updateArray', ctrl.updateArray)

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

app.listen(PORT, () => console.log(`We are now listening to port ${PORT}`))
