const PORT      =   8080;
const app       =   require('./app');
const dotenv = require('dotenv');

dotenv.config({path:"backend/config/config.env"});
const connectDatabase = require('./config/database');
// connectDatabase();
app.listen(PORT,(req,res)=>{
    return console.log("Server listening on port "+PORT);
})

app.get("/",(req,res)=>{
    res.json("local backend host");
});

app.get("/signup",(req,res)=>{
    res.json("local backend host");
});