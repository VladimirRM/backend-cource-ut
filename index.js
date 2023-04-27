import express from "express";
import mongoose from "mongoose";

const PORT = 5000;

const DB_URL = "mongodb+srv://user:user@cluster0.jqxjuqm.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(express.json())

app.post('/',(req,res)=>{
    console.log(req.body)

   res.status(200).json('Server working111')
}) 

async function startApp(){
   try{
    await mongoose.connect(DB_URL)
   }catch (e){
    console.log(e)
   }
}
startApp()

app.listen(PORT, ()=> console.log("SERVER STARTED ON PORT" + PORT))