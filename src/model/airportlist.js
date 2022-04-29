
const mongoose =require("mongoose");

const airportlistSchema=new mongoose.Schema({
     airport_name:{type:String,required:true,unique:true},
     city:{type:String,required:true,unique:true},
},{
    versionKey:false,
    timestamps:true
})


const Airport=mongoose.model("Airport",airportlistSchema);

module.exports=Airport;