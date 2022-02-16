const express=require("express")
const connectDB = require("./config/db")
const app=express()
const authRoutes=require("./routes/auth")
connectDB()


app.use(express.json())
app.use("/api/auth",authRoutes)





const port=5000
app.listen(port,()=>console.log(`server is running on ${port}`))