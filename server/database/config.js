const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      autoIndex: true,
    }).then(() => console.log("Conexion a la base de datos exitosa :D"));
    
    
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnection