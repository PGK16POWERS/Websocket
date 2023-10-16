const express = require("express");
const app = express();
const ejs = require("ejs")

app.set("view engine","ejs");
app.use(express.static("views"));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});



app.listen(7600, ()=> {
    console.log("Danko Supreme");
});