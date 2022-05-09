const express = require("express")
const app = express()
const bodyParser= require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PostsRouter = require("./Routers/PostsRouter")

app.use("/posts", PostsRouter)


app.listen(7000, ()=>console.log("Listening on: 7000"));

