const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"backend/config/config.env"});


const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017"+"/tinder",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
console.log("Database connected successfully");
})
}
module.exports  =   connectDatabase;