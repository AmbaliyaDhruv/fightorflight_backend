
const { query } = require("express");
const express=require("express");

const router=express.Router();

const Routeof=require("../model/route.js");

router.get("/",async(req,res)=>{
    try {
  
         let start=req.query.start;
         let end =req.query.end;
        
         const route=await Routeof.find().populate("startAirport").populate("endingAirport").lean().exec();
         let data;
         if(start && end){
             data=route.filter(x=>{if(x.startAirport.city===start && x.endingAirport.city===end){
                return x;
           }});
         }else{
            return res.status(404).send(route);
         }
         return res.status(200).send(data);
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