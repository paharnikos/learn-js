require("dotenv").config();

//Import express and middlewares
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

//Set PORT and initialize express server
const port = 3000;
const app = express();

//Declare middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The server is running");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});