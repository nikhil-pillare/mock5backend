const mongoose = require("mongoose")

const DoctorShchema = new mongoose.Schema({
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

const DoctorModel= mongoose.model("Doctors", DoctorShchema)

module.exports= DoctorModel