const {json} = require('body-parser');
const express = require('express');
const cors = require ('cors');
const ctrl = require('./controllers/mainController')

const PORT = 3344;


const app = express();
app.use(json());
app.use(cors());


app.get('/api/getUserInfo/', ctrl.getUserInfo)
app.get('/api/getUserBoards/:id', ctrl.getBoards)
app.get('/api/getUserTeams/:id', ctrl.getTeams)
app.post('/api/addToUserList', ctrl.addToUserList)


app.listen(PORT, () => console.log(`We are now listening to port ${PORT}`));