const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const cors = require ('cors');
const ctrl = require('./controllers/mainController');

const PORT = 3344;


const app = express();
app.use(json());
app.use(cors());

// I decided to add massive to my project
// I was having difficulty getting the nested data in Redux to rerender properly.
const massiveConnection = massive(connectionString) // On this line I tell massive to make the connection
  .then(db => app.set("db", db)) // if connection exists, set 'db' to db
  .catch(console.log) //  log an error if exists


app.get('/api/getUserInfo/', ctrl.getUserInfo)
app.get('/api/getUserBoards/:id', ctrl.getBoards)
app.get('/api/getUserTeams/:id', ctrl.getTeams)
app.post('/api/addToUserList', ctrl.addToUserList)


app.listen(PORT, () => console.log(`We are now listening to port ${PORT}`));