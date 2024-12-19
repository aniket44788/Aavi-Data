const express = require("express");
const app = express();
const mongoose = require("mongoose");
const signup = require("./routes/signup");
const route = require("./routes/routes")
const env = require("dotenv")
const port = process.env.PORT
env.config()
app.use(express.json())
app.use("/signup",signup)
app.use("/api",route)

// app.get("/", (req,res)=>{
//     res.send("hi i am aniket")
// })

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(process.env.URL)
    console.log("connected")
}
app.listen(port , ()=>{
    console.log("server running ")
})

  