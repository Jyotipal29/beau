const path = require('path');
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const apiRoutes = require('./api.js')
const app = express();


require("./config/db")()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT | 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
