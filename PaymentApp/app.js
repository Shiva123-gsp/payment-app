const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
res.sendFile('/index.html' , {root: __dirname})
});




app.listen(3000, function(){
  console.log("server is running at port 3000");
})
