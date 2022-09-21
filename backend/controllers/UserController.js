const User  = require("../models/User")
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const ErrorHandler = require('../utils/errorhandler');
const APiFeatures = require('../utils/apifeature');

exports.createUser = asyncErrorHandler(async (req,res,next) =>{

    const user   =   await User.create(req.body);

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