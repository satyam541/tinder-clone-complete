const mongoose = require('mongoose');
const connectDatabase=()=>{mongoose.connect(process.env.DB_URI+"/tinder-clone",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`database connection established:${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})
}
module.exports=connectDatabase;