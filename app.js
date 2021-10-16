const express = require("express");
const app = express();

const RUTA = 3030;
const path = require("path");

app.use(express.static('public'));

app.get("/", function(req, res){
    let dir = path.join(__dirname, "./views/index.html")
    res.sendFile(dir);
} )

app.get("/productDetail", function(req, res){
    let dir1 = path.join(__dirname, "./views/productDetail.html")
  res.sendFile(dir1);
})

app.get("/productCart", function(req, res){
    let dir2 = path.join(__dirname, "./views/productCart.html")
    res.sendFile(dir2);
})

app.get("/register", function(req, res){
    let dir3 = path.join(__dirname, "./views/register.html")
    res.sendFile(dir3);
})

app.get("/login", function(req, res){
    let dir4 = path.join(__dirname, "./views/login.html")
    res.sendFile(dir4);
})

app.listen(RUTA, function(){
    console.log("Servidor levantado en puerto 3000")
});