const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
    .then(() => {
        console.log("Connection is successfully established");
    }).catch((e) => {
        console.log(e);
        console.log("No connection");
    });