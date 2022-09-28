const express   = require('express');
const app       = express();
const cors      = require('cors');
app.use(cors());
app.use(express.json());

const web = require("./routes/web");

// app.use("/app",web);
app.use("/",web,(req,res)=>{
    return res.status(200).json({message:"Default home page"});
})


module.exports = app;