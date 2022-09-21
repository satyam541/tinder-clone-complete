module.exports=dataObject=>(req,res,next)=>{
    Promise.resolve(dataObject(req,res,next)).catch(next);
}