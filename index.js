require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors()); // Add CORS middleware before routes
app.use(express.json())


const PORT=process.env.PORT||5000

const userRoutes=require('./routes/userRoute')
app.use('/',userRoutes)


const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err))

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})
