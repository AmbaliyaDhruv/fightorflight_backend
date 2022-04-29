
const express=require("express");
const Airport = require("../model/airportlist");

const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const airport=await Airport.find().lean().exec();
      return  res.status(200).send(airport);
    } catch (error) {
      return  res.status(400).send({message:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {

        const airport=await Airport.create(req.body);

        return res.status(200).send(airport);
        
    } catch (error) {
      return  res.status(400).send({message:error.message});
    }
})


module.exports=router;