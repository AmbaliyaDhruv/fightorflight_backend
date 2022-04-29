

const express=require("express");

const app=express();
const port=8080 || process.env.PORT;
const connect=require("./config/db");
const airportlist=require("./controller/airportlist.controller");
const route=require("./controller/route.controller");
const cors=require("cors");

app.use(express.json());

app.use(cors({origin:"*"}));

app.use("/airportlist",airportlist);
app.use("/route",route)
app.listen(port,async()=>{
try {
     
    connect()
    console.log(`http://localhost:${port}/`);

} catch (error) {
    console.log(error.message)
}
})