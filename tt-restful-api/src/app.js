const express = require('express');
const res = require('express/lib/response');
const app = express();
const studentRouter = require("./routers/student");

require("./db/conn");
const Student = require("./models/students");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, function (req, res) {
    console.log(`Server is running on port at ${port}.`);
});

