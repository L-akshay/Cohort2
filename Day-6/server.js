/*
server ko start karna 
database sa connect karna
*/

const app=require('./src/app');
const mongoose=require("mongoose")
function connectToDb(){
  mongoose.connect("mongodb+srv://lakshaydawar2006_db_user:PkKJpntNlAJaskrW@lakshays.qelom0s.mongodb.net/DAY-6")
  .then(()=>{
    console.log("connected with server")
  })
}
connectToDb()

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})