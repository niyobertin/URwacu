import Sequelize from "sequelize";
import db from "../configulation/config.js";
//student modele
const urwacudb = db.define('urwacu', {
  userId:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  secondName:{
    type:Sequelize.STRING
  },
  userName:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  age:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  gender:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  Email:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  confilmpassword:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true
  }

})
await urwacudb.sync();//crate default table if not exist
//exporting studnet model
export default urwacudb;