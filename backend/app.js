const express       = require('express');
const app           = express();
const cors          = require('cors');
const Os = require('os');
Os.tmpDir = Os.tmpdir;
const fileUpload    = require("express-upload")
const bodyParser    = require('body-parser');
app.use(bodyParser.json()); //utilizes the body-parser package
app.use(fileUpload());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
app.use(cors());
app.use(express.json());
Os.tmpdir()

const web = require("./routes/web");

// app.use("/app",web);
app.use("/",web,(req,res)=>{
    return res.status(200).json({message:"Default home page"});
})


module.exports = app;