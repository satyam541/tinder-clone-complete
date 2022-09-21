const mongoose = require('mongoose');



const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI+"/tinder",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
console.log("Database connected successfully");
})
}
module.exports  =   connectDatabase;