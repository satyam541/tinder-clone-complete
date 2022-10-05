const User              = require("../models/User")
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const ErrorHandler      = require('../utils/errorhandler');
const APiFeatures       = require('../utils/apifeature');
const {v4:uuidv4}       = require("uuid");
const bcrypt            = require("bcrypt");
const jwt               = require('jsonwebtoken');
const secret            = "secret";
exports.createUser = asyncErrorHandler(async (req,res,next) =>{
    const generatedUserId       = uuidv4();
    const hashedPassword        =   await bcrypt.hash(req.body.password,10);
    updatedData                 = {...req.body , "uuid":generatedUserId,"hashed_password":hashedPassword}
    existingUser                =  await User.findOne({email:updatedData.email});
    if(existingUser)
    {
        return res.status(409).send("User already exists");
    }
    try
    {
        const sanitizedEmail    =   updatedData.email.toLowerCase();
        const insertedUser      =   await User.create(updatedData);
        
        const token             =   jwt.sign({user_id:generatedUserId,sanitizedEmail},secret,{
            expiresIn: 60 * 24,
        });
        return res.status(201).json({success: 'User created successfully',userId:insertedUser.id
        ,token,email:sanitizedEmail});
    }
    catch (err) {
        console.log(err);
    }
});

exports.getAllUsers = asyncErrorHandler(async (req,res)  => {

    const apiFeature    =   new APiFeatures(User.find(),req.query).search();
    const users         =   await apiFeature.query;

    res.status(200).json({success:true,users});

})

exports.getUserDetails = asyncErrorHandler(async (req,res,next) => {
    const user   =   await User.findById(req.params.id);

    if(!user)
    {
        return next(new ErrorHandler('User not found',404));
    }

    return res.status(200).json({success:true,'message':'User details successfully retrieved',user});

});  

exports.getUser = asyncErrorHandler(async (req,res,next) => {
    
    const user   =   await User.findOne({email:req.body.email});
    if(!user)
    {
        return next(new ErrorHandler('User not found',404));
    }

    if(user && (await bcrypt.compare(req.body.password,user.hashed_password)))
    {
        const sanitizedEmail    =   user.email.toLowerCase();
        const foundUser         =   user;
        
        const token             =   jwt.sign({user_id:foundUser.id,sanitizedEmail},secret,{
            expiresIn: 60 * 24,
        });
        return res.status(201).json({success:true,'message':'User Authenticated',token,email:sanitizedEmail,userId:foundUser.id});
    }
    else
    {
        return res.status(400).send("Credentials don't match");
    }

});  

exports.updateUser   =   asyncErrorHandler(async (req,res,next) => {
    let user = await User.findById(req.params.id);

    if(!user)
    {
        return next(new ErrorHandler('User not found',500));
    }

    user =   await User.findByIdAndUpdate(req.params.id, req.body.formData,{new:true,
    runValidators:true,useFindAndModify:false});


    res.status(200).json({success:true,
        message:"User updated successfully updated",user});


});

exports.deleteUser = asyncErrorHandler(async (req,res,next) => {  
    let user = await User.findById(req.params.id);

    if(!user)
    {
        return next(new ErrorHandler('User not found',500));
    }

    user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({success:true,message:"User deleted successfully",user});
    
});