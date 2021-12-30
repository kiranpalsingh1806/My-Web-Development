const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kiranpaldb1")
    .then(() => console.log("Connection is successful.."))
    .catch((err) => console.log(err));

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

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "Java Script",
            ctype: "Front End",
            videos: 150,
            author: "Kiranpal Singh",
            active: true
        })

        const mongoPlaylist = new Playlist({
            name: "Mongo DB",
            ctype: "Database",
            videos: 66,
            author: "Kiranpal Singh",
            active: true
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            videos: 10,
            author: "Kiranpal Singh",
            active: true
        })

        const expressPlaylist = new Playlist({
            name: "Express",
            ctype: "Database",
            videos: 20,
            author: "Kiranpal Singh",
            active: true
        })

        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
    } catch {
        console.log(err);
    }
}

// createDocument();

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

getDocument();
getDocument2();
getDocument3();