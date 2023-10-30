// let jwt= require("jsonwebtoken");
// require("dotenv").config();

// const auth=(req,res,next)=>{
//     const token= req.headers?.authorization;
//     if(token){
//         jwt.verify(token, process.env.key, (err, decoded)=>{
//             if(decoded){
//                 next()
//             }else{
//                 res.send({"msg":"token error"})
//             }
//         })
//     }else{
//         res.send({"msg":"error in generating token"})
//     }
// }

// module.exports={auth}