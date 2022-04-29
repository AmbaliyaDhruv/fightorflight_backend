const mongoose=require("mongoose");

const routeSchema=new mongoose.Schema({
     airline_name:{type:String,required:true,unique:true},
     startAirport:{type:mongoose.Schema.ObjectId,ref:"Airport"},
     endingAirport:{type:mongoose.Schema.ObjectId,ref:"Airport"},
     cost:{type:Number,required:true},
     startingTime:{type:String,required:true},
     endingTime:{type:String,required:true},
     PNR:{type:String,required:true},
     capacity:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})


const Routeof=mongoose.model("Route",routeSchema);

module.exports=Routeof