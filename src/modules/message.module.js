import  Sequelize  from "sequelize";
import db from "../configulation/config.js";

//message module
const urwacuMessage = db.define('urwacuMessage',{
    Message:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
await urwacuMessage.sync();//crate default table if not exist
//exportings
export default urwacuMessage;