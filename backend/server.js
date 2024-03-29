const express=require("express")
const connectDB = require("./config/db")
const app=express()
const authRoutes=require("./routes/auth")
const gameRoutes=require("./routes/game")
const profileRoutes=require("./routes/profile")

connectDB()


app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/game",gameRoutes)
app.use("/api/profile",profileRoutes)





const port=5000
app.listen(port,()=>console.log(`server is running on ${port}`))