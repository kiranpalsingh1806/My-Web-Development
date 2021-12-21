const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kiranpaldatabase1")
.then(  () => console.log("Connection is successful.."))
.catch( (err) => console.log(err));