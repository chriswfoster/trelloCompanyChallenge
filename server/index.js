const {json} = require('body-parser');
const express = require('express');
const cors = require ('cors');

const PORT = 3344;


const app = express();
app.use(json());
app.use(cors());




app.listen(PORT, () => console.log(`We are now listening to port ${PORT}`));