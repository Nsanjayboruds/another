import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js" 
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
const app = express()
app.use(cors({
  origin: "http://localhost:5173/",  // Must match frontend
  credentials: true                 // Required for cookies/auth headers
}));
const port =process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.listen(port,()=>{
    connectDb()
    console.log("server started");
    
})