const express= require("express");
const app= express();

const mongoose= require("mongoose");

const cors= require("cors");

const userRouter = require("./routes/user.route")
const doctorRoute =require("./routes/doctor.route")
const connection = require("./config/db")
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter)
app.use("/doctor", doctorRoute);

const connect =async()=>{
      try {
        await connection
        console.log("connected")
      } catch (error) {
        
      }
}

app.listen(process.env.PORT, ()=>{
    connect();
    console.log("listening on port")
})