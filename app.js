
const express = require("express");
const app = express();
const path = require("path");
const port = 3000

app.use (express.static("public"))
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html")) 
});

app.use (express.static("public"))
app.get ('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html")) 
});

app.listen (port, () => 
console.log("Esta corriendo el puerto "+port));