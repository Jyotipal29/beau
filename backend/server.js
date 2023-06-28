const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT | 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
