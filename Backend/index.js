const express=require("express")
const app=express()
app.get(('/about'),(re,res)=>{
  res.send("This is about Page")

})
app.listen(3000)