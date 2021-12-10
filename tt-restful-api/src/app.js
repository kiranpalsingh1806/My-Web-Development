const express = require('express');
const app = express();

require(".db./conn");

const port = process.env.PORT || 3000;

app.post("/students", function(req, res) {
    res.send("<h1>Hello There</h1>")
})

app.listen(port, function(req, res) {
    console.log(`Server is running on port at ${port}.`);
})