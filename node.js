const express = require("express");
const app = express();
const ejs = require("ejs");
const paypal = require("paypal-rest-sdk");

app.set("view engine","ejs");
app.use(express.static("views"));

paypal.configure({
    mode: "sandbox",
    client_id: "AfV1TMh79f6Csp8dCKQ3T-35gSQP8f_hghT8Piz8PAvVygoXGfJtSzkAKsQ7Ms4YFwG5en2-ewd2-qZb",
    client_secret: "EAEwbnmaeLzg-0eGSsHFboyndoFck1cLcDtrhwr2QOU3harQLRoTvV4uop336VJVpi67yX8CEvR_fBl2",
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/pay", (req,res)=>{
    res.render("checkout.ejs");
})


app.listen(7600, ()=> {
    console.log("Danko Supreme");
});