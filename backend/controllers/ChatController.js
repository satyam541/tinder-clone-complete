const Chat              = require("../models/Chat")
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const ErrorHandler      = require('../utils/errorhandler');
exports.getChats = asyncErrorHandler(async (req,res,next) =>{
    const user_id = {from_user_id:req.query.from_id,to_user_id:req.query.to_id};
    const chats   = await Chat.find(user_id);
    return res.status(200).json({success:true,'message':'User chats successfully retrieved',chats});

});

exports.sendMessage = asyncErrorHandler(async (req,res,next) =>{

    const chat  = await Chat.create(req.body);
    console.log(req.body);
    return res.status(200).json({message:"Chat added",chat:chat});
    // const chats   = Chat.find(user_id);
    // return res.status(200).json({success:true,'message':'User chats successfully retrieved',chats});

});