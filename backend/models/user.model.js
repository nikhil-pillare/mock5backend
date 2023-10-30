const mongoose = require("mongoose")

const userShchema = new mongoose.Schema({
    email: String,
    password:String,
    confirmPassword:String
},
{
    versionKey: false
}
)

const userModel= mongoose.model("User", userShchema)

module.exports= {userModel}