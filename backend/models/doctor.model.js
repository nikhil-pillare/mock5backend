const mongoose = require("mongoose")

const doctorShchema = new mongoose.Schema({
    name:String,
    imageUrl:String,
    specialization:String,
    location:String,
    date:String,
    slots:Number,
    fee:Number
},
{
    versionKey: false
}
)

const doctorModel= mongoose.model("Doctors", doctorShchema)

module.exports= {doctorModel}