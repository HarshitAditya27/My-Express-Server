const express = require("express");
const app = express();
app.get("/",function(req,res){
res.send("<h1>Hello World</h1>");
});
app.get("/contact",function(req,res) {
res.send("Contact me at: harshitaditya64@gmail.com");
});
app.get("/about",function(req,res) {
res.send("My name is Harshit and I love coding and Computer Science");
});
app.get("/hobbies",function(req,res) {
res.send("I like reading books");
});
app.listen(3000, function(){
console.log("Server started on port 3000");
});
