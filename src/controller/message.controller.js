import message from "../modules/message.module.js";
//creating new message
const addNewMessage = (req,res) => {
    const {Message} = req.body;
    message.create({
        Message
    })
    .then(message => res.send("Adding message successfully ✅"))
    .catch((err) => res.send(err.message))
};

// getting message
const getMessage = (req,res) =>{
    message.findAll()
    .then((message) => {
        res.json(message);
    })
    .catch(err => console.log(err));
}
const getUninqueMessage = (req, res) => {
    const id = parseInt(req.params.id);
    message.findByPk(id)
        .then((message) => {
            if (message) {
                res.json(message);
            } else {
                res.sendStatus(400).send("Bad resquest: message  not found.")
            }
        })
        .catch(err => console.log(err));
};
const UpdatingMessage = (req,res) => {
    const {Message} = req.body;
    const id = parseInt(req.params.id);
    message.findByPk(id)
    .then((message) =>{
        message.update({
            Message:Message || message.Message
        })
        .then(() => {
            res.send("Updated successifully !!")
        })
        .catch(err => console.log(err));
})
.catch(err => console.log(err));
}
const deletingMessage = (req,res) => {
    const id = parseInt(req.params.id);
    message.findByPk(id)
    .then((message) => {
        if (!message) {
            res.sendStatus(404);
        } else {
            message.destroy()
                .then(() => res.send("Message deleted successifully!!!"))
                .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err));
}
export default {
    addNewMessage,
    getMessage,
    getUninqueMessage,
    UpdatingMessage,
    deletingMessage
}