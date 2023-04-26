import express from "express";

const PORT = 5000;

const app = express()

app.post('/',(req,res)=>{
    console.log(req.body)

   res.status(200).json('Server working111')
})

app.listen(PORT, ()=> console.log("SERVER STARTED ON PORT" + PORT))