import express  from "express";
import controller from "../controller/user.controller.js";
import messageController from "../controller/message.controller.js";
const router = express.Router();
//user profile contrioller
router.post("/add/user",controller.addNewUser);
router.get("/fetch/user",controller.getAllUsers);
router.get('/fetch/:id',controller.getUninqueuser);
router.put('/update/:id',controller.userUpdating);
router.delete('/delete/:id',controller.deletingAcount);

//Message controller
router.post("/add/message",messageController.addNewMessage);
router.get('/message',messageController.getMessage);
router.get('/message/:id',messageController.getUninqueMessage);
router.put('/message/update/:id',messageController.UpdatingMessage);
router.delete('/message/delete/:id',messageController.deletingMessage);

export default router;