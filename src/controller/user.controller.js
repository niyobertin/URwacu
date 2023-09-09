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


//getting single user

const getUninqueuser = (req, res) => {
    const id = parseInt(req.params.id);
    users.findByPk(id)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.sendStatus(400).send("Bad resquest: user not found.")
            }
        })
        .catch(err => console.log(err));
};
//updating user profile
const userUpdating = (req,res) => {
    const {firstName,secondName,userName,age,gender,Email,phoneNumber,password,confilmpassword} = req.body;
    const id = parseInt(req.params.id);
    users.findByPk(id)
    .then((user) =>{
        user.update({
            firstName:firstName || user.firstName,
            secondName:secondName || user.secondName,
            userName:userName || user.userName,
            age:age || user.age,
            gender:gender || user.gender,
            Email:Email || user.Email,
            phoneNumber:phoneNumber || user.phoneNumber,
            password:password ||user.password,
            confilmpassword:confilmpassword || user.confilmpassword
        })
        .then(() => {
            res.send("Updated successifully !!")
        })
        .catch(err => console.log(err));
})
.catch(err => console.log(err));
}
//Deleting user acount
const deletingAcount = (req,res) => {
    const id = parseInt(req.params.id);
    users.findByPk(id)
    .then((user) => {
        if (!user) {
            res.sendStatus(404);
        } else {
            user.destroy()
                .then(() => res.send("acount deleted successifully!!!"))
                .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err));
}
export default {
    addNewUser,
    getAllUsers,
    getUninqueuser,
    userUpdating,
    deletingAcount
}

