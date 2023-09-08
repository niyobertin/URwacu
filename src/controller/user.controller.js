import users from "../modules/user-module.js";
//creating new user
const addNewUser = (req,res) => {
    const {firstName,secondName,userName,age,gender,Email,phoneNumber,password,confilmpassword} = req.body;
    users.create({
        firstName,
        secondName,
        userName,
        age,
        gender,
        Email,
        phoneNumber,
        password,
        confilmpassword
    })
    .then(user => res.send("Adding User successfully ✅"))
    .catch((err) => res.send(err.message))
};
//Getting all registered users
const getAllUsers = (req,res) => {
        users.findAll()
            .then((users) => {
                res.json(users);
            })
            .catch(err => console.log(err));
}
export default {
    addNewUser,
    getAllUsers
}