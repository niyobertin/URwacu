import express  from "express";
import controller from "../controller/user.controller.js"
const router = express.Router();
router.post("/add",controller.addNewUser);
router.get("/fetch",controller.getAllUsers);
router.get('/fetch/:id',controller.getUninqueuser);
router.put('/update/:id',controller.userUpdating);
router.delete('/delete/:id',controller.deletingAcount);

export default router;