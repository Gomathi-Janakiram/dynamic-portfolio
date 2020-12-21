const express = require("express")
const mongodb = require("mongodb")
const bodyparser = require("body-parser")
require("dotenv").config()
const cors = require("cors")
const app = express()
const mongoClient = mongodb.MongoClient;
const port=process.env.PORT||8000

const dbURL =process.env.DB_URL|| "mongodb://127.0.0.1:27017";

app.use(express.static("./public"))
app.set("view engine", "ejs")
app.use(cors())
// app.use(bodyparser.json())
var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.get("/createDetails", async (req, res) => {
    res.render("form")
})

app.post("/createDetails", urlencodedParser, async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("portfolio")
        let data = await db.collection("info").insertOne(req.body);
        res.render("portfolio", { data: req.body })
        // clientInfo.close();
    } catch (error) {
        res.status(400).json({ message: "Info not creted" })
    }
})


app.listen(port, (err) => {
    if (err) {
        throw err
    } else {
        console.log(`Server started at ${port}`)
    }
})
