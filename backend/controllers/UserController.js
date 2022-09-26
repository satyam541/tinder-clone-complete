const User              = require("../models/User")
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const ErrorHandler      = require('../utils/errorhandler');
const APiFeatures       = require('../utils/apifeature');
const {v4:uuidv4}       = require("uuid");
const bcrypt            = require("bcrypt");
exports.createUser = asyncErrorHandler(async (req,res,next) =>{
    const generatedUserId       = uuidv4();
    const hashedPassword        =   await bcrypt.hash(req.body.password,10);
    updatedData                 = {...req.body , "uuid":generatedUserId,"hashedPassword":hashedPassword}
    existingUser                =  await User.findOne({email:updatedData.email});
    if(existingUser)
    {
        return res.status(409).send("User already exists");
    }

    return res.status(201).json(updatedData);
    
    const user   =   await User.create(updatedData);

    res.status(201).json({success: 'User created successfully',user});

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

exports.updateUser   =   asyncErrorHandler(async (req,res,next) => {

    let user = await User.findById(req.params.id);

    if(!user)
    {
        return next(new ErrorHandler('User not found',500));
    }

    user =   await Product.findByIdAndUpdate(req.params.id, req.body,{new:true,
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