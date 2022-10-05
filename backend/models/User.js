const mongoose = require('mongoose');

const userSchema =   mongoose.Schema({

    user_id:{
        type:String,
        trim:true
    },
    first_name:{
        type:String,
        // required:[true,"Please Enter First Name"],
        trim:true
    },
    email:{
        type:String,
        // required:[true,"Please Enter Email Address"],
        trim:true
    },
    url:{
        type:String,
        // required:[true,"Please Enter Image Url"],
        trim:true
    },
    hashed_password:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    dob_day:{
        type:Number,
        // required:[true,"Please Enter Date of Birth Day"],
        trim:true
    },
    dob_month:{
        type:Number,
        // required:[true,"Please Enter Date of Birth Month"],
        trim:true
    },
    dob_year:{
        type:Number,
        // required:[true,"Please Enter Date of Birth Year"],
        trim:true
    },
    show_gender:{
        type:Boolean,
        trim:true,
    },
    gender_identity:{
        type:String,
        // required:[true,"Please Select Gender Identity"],
        trim:true
    },
    gender_interest:{
        type:String,
        // required:[true,"Please Select Gender Interest"],
        trim:true
    },
    matches:{
        type:[String],
        // required:[true,"Please Select Gender Interest"],
        trim:true
    },


})
module.exports  =   mongoose.model("User",userSchema);