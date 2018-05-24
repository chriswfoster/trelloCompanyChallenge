const {json} = require('body-parser');
const express = require('express');
const cors = require ('cors');
const ctrl = require('./controllers/mainController')

const PORT = 3344;


const app = express();
app.use(json());
app.use(cors());


app.get('/api/getUserBoards/:id', ctrl.addUserList)


app.listen(PORT, () => console.log(`We are now listening to port ${PORT}`));