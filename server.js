const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.post("/contact",(req,res)=>{
console.log(req.body);
res.send("Message received");
});

app.listen(3000,()=>console.log("Server running"));
