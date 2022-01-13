const express = require('express');
const res = require('express/lib/response');
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


app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
});

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.send(e);
    }
});

app.patch("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(id, req.body);
        res.send(updateStudent);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port at ${port}.`);
});

