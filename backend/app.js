require('dotenv').config()

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postRoutes = require("./routes/Post");
const cors = require("cors")
app.use(cors());
app.options('*', cors());
const mongoose = require("mongoose");

//Connecting Datbase Online
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
        "mongodb+srv://Instaclone:Vaibhav@cluster0.nvjr7e8.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
}

app.get("/", (req, res) => {
    res.send("IT IS WORKING");
})

//middlware
app.use(bodyParser())
app.use("/post", postRoutes);

const port = process.env.PORT || 8080;
app.listen(`${port}`, () => {
    console.log(`server listening on port ${port}`)
})