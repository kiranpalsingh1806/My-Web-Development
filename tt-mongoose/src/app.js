const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kiranpaldb1")
    .then(() => console.log("Connection is successful.."))
    .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        minlength: [2, "Please enter name with more than two letters"],
        maxlength: 30
    },
    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["frontend", "backend", "database"]
    },
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
        // const jsPlaylist = new Playlist({
        //     name: "Java Script",
        //     ctype: "Front End",
        //     videos: 150,
        //     author: "Kiranpal Singh",
        //     active: true
        // })

        // const mongoPlaylist = new Playlist({
        //     name: "Mongo DB",
        //     ctype: "Database",
        //     videos: 66,
        //     author: "Kiranpal Singh",
        //     active: true
        // })

        // const mongoosePlaylist = new Playlist({
        //     name: "Mongoose",
        //     ctype: "Database",
        //     videos: 10,
        //     author: "Kiranpal Singh",
        //     active: true
        // })

        const newPlaylist = new Playlist({
            name: "Express Lang JS",
            ctype: "UIUX",
            videos: 20,
            author: "Kiranpal Singh",
            active: true
        })

        const result = await Playlist.insertMany([newPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();

const getDocument = async () => {
    try {
        const result = await Playlist
            .find({ videos: { $gt: 50 } })
            .select({ name: 1 });
        console.log("Comparison Query Operators");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const getDocument2 = async () => {
    try {
        const result = await Playlist
            .find({ ctype: { $in: ["Back End", "Database"] } })
            .select({ name: 1 });
        console.log("Comparison Query Operators");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const getDocument3 = async () => {
    try {
        const result = await Playlist
            .find({
                $or: [
                    { ctype: "Database" },
                    { author: "Kiranpal Singh" }]
            })
            .select({ name: 1 });
        console.log("Logical Query Operators");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const countMongoose = async () => {
    try {
        const result = await Playlist
            .find({
                $or: [
                    { ctype: "Database" },
                    { author: "Kiranpal Singh" }]
            })
            .select({ name: 1 })
            .count();
        console.log("Count Query Method");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const sortMongoose = async () => {
    try {
        const result = await Playlist
            .find({
                $or: [
                    { ctype: "Database" },
                    { author: "Kiranpal Singh" }]
            })
            .select({ name: 1 })
            .sort({
                name: -1
            });
        console.log("Sorting Query Method (-1, 1)");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument();
// getDocument2();
// getDocument3();
// countMongoose();
// sortMongoose();

const updateDocument = async (_id) => {
    try {
        const result = await Playlist.updateOne({ _id }, {
            $set: {
                name: "Javascript Language"
            }
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

// updateDocument("61c7d89419b1086b5b30149c");

const deleteDocument = async (_id) => {
    try {
        const result = await Playlist.deleteOne({ _id });
        console.log("Deleting document in Mongoose");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// deleteDocument("61c7d89419b1086b5b30149d");

const deleteDocument2 = async (_id) => {
    try {
        const result = await Playlist.findByIdAndDelete({ _id });
        console.log("Deleting document in Mongoose");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// deleteDocument2("61c527976404944bb1695f63");




