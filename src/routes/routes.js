import express  from "express";
import controller from "../controller/user.controller.js"
const router = express.Router();
router.get("/path",(req,res) =>{
    res.send("this is the rooting")
});
router.post("/add",controller.addNewUser);
router.get("/fetch",controller.getAllUsers);

export default router;