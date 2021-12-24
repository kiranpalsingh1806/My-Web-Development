const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kiranpaldb1")
    .then(() => console.log("Connection is successful.."))
    .catch((err) => console.log(err));

// Creating Mongoose Schema 

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// Mongoose Model - Creating Collection

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "Node JS",
            ctype: "Back End",
            videos: 60,
            author: "Kiranpal Singh",
            active: true
        })

        const result = await reactPlaylist.save();
        console.log(result);
    } catch {
        console.log(err);
    }
}

createDocument();
