
const express=require("express");

const router=express.Router();

const Routeof=require("../model/route.js");

router.get("/",async(req,res)=>{
    try {
        //  const route=await Routeof.find().populate({path:"startAirport",match:{airport_name:{$eq:"Indra Gandhi Internation Airport"}},select:"airport_name"}).populate({path:"endingAirport",match:{airport_name:{$eq:"Sardar Patel Internation Airport"}},select:"airport_name"}).lean().exec();

         const route=await Routeof.find().populate("startAirport").populate("endingAirport").lean().exec();
         return res.status(200).send(route);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
})

router.post("/",async(req,res)=>{
    try {
         
        const route=await Routeof.create(req.body);

        return res.status(400).send(route);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
})


module.exports=router;