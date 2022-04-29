

const express=require("express");

const app=express();
const port=8080 || process.env.PORT;
const connect=require("./config/db");
const cors=require("cors");

app.use(express.json());

app.use(cors({origin:"*"}));

app.listen(port,async()=>{
try {
     
    connect()
    console.log(`http://localhost:${port}/`);

} catch (error) {
    console.log(error.message)
}
})