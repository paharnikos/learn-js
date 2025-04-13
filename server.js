require("dotenv").config();

//Import express and middlewares
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); //puteam sa folosesc si axios?

//Set PORT and initialize express server
const port = process.env.PORT;
const app = express();

//Declare middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The server is running:" + ` status code ${res.statusCode}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); //de ce acest console log nu apare si in consola browserului? 
});