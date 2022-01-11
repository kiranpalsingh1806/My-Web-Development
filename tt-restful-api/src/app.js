const express = require('express');
const app = express();

require("./db/conn");
const Student = require("./models/students");

const port = process.env.PORT || 3000;

app.use(express.json());

// app.post("/students", function (req, res) {
//     const user = new Student(req.body);
//     console.log(user);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// });

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port at ${port}.`);
})