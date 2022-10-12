const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
app.use(bodyParser.json()); //utilizes the body-parser package
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const web = require("./routes/web");

// app.use("/app",web);
app.use("/",web,(req,res)=>{
    return res.status(200).json({message:"Default home page"});
})


module.exports = app;