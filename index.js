const express = require("express");
const app = express();
const port = 8000
const mongoose = require("mongoose");
const signup = require("./routes/signup");
const route = require("./routes/routes")

app.use(express.json())
app.use("/signup",signup)
app.use("/api",route)

// app.get("/", (req,res)=>{
//     res.send("hi i am aniket")
// })

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://darkpanda44788:PCRLWKuyx4Vguo4y@cluster0aa.zxb7f.mongodb.net/aavi?retryWrites=true&w=majority&appName=Cluster0aa")
    console.log("connected")
}
app.listen(port , ()=>{
    console.log("server running ")
})

  