import express from "express";
import db from "./src/configulation/config.js";
import urwacuRouter from "./src/routes/routes.js";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());
app.use(cors());
app.use('/urwacu', urwacuRouter);
app.get("/",(req,res)=>{
    res.send("This is home page")
});

app.listen(3000,()=>console.log("Listening to the port 3000...."))