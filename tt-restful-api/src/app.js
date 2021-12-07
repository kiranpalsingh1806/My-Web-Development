const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello From The Other Side</h1>");
})

app.post("/students", function(req, res) {
    res.send("<h1>Hello There</h1>")
})

app.listen(port, function(req, res) {
    console.log(`Server is running on port at ${port}.`);
})