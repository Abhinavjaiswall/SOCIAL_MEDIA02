import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.get("/",(req,res)=>{
    res.send("Backend Running...");
});

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Backend running at port ${PORT}`);
});
