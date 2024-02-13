const express = require ("express");
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
require("./db/connection");
const User = require("./Models/User")

  app.post('/', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
  });
app.listen(3000,()=>console.log('server runing'))