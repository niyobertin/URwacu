
import dotenv from 'dotenv';
import express from "express";
import db from "./src/configulation/config.js";
import urwacuRouter from "./src/routes/routes.js";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
app.use('/urwacu',urwacuRouter);
app.get("/",(req,res)=>{
    res.send("This is home page")
});

app.listen(process.env.PORT,()=>console.log(`Listening to the port ${process.env.PORT} ...`))