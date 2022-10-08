const mongoose = require('mongoose');


const chatSchema =  mongoose.Schema({

    from_user_id:{
        type:String,
        trim:true
    },
    
    to_user_id:{
        type:String,
        trim:true
    },
    
    message:{
        type:String,
        trim:true
    },
    timestamp:{type:String, trim:true},


});

module.exports  =   mongoose.model("Chat",chatSchema);