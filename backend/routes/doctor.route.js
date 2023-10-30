const express = require("express");

const doctorModel= require("../models/doctor.model")

const doctorRoute= express.Router();

doctorRoute.post("/appointments", async(req,res)=>{
    try {
        const doc= new doctorModel(req.body)
        await doc.save()

        res.status(200).json({msg:"new doctor is added",doctor:req.body} )

    } catch (error) {
        res.status(400).json({err:error.message})
        
        
    }
})

doctorRoute.get("/", async(req,res)=>{
    const {name, sort}=req.query;
    try {
      let search={}
      let sortBy={}

      if(name){
        search.name=name
      }
      if(sort=="asc"){
        sortBy.date=1
      }else if(sort=="desc"){
        sortBy.date=-1
      }else{
        sortBy=null
      }

      if(name){
        search.name=({$regex:name, $options:"i"})
      }

      const data = await doctorModel.find(search).sort(sortBy)
      res.status(200).json({msg:data})



    } catch (error) {
        res.status(400).json({err:error.message})
        
        
    }
})



doctorRoute.patch("/update/:postId", async (req,res)=>{
    try {
        const updateDoc= await doctorModel.findByAndUpdate(
            req.params.postId,
            req.body,
            {new:true}
        )
        res.send(updateDoc)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
})
doctorRoute.delete("/delete/:postId", async (req,res)=>{
    try {
        const deleteDoc= await doctorModel.findByAndDelete(
            req.params.postId,
            req.body,
            {new:true}
        )
        res.send(deleteDoc)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
})

module.exports= 
    doctorRoute
