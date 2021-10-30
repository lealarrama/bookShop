const express = require("express");
const app = express();

const router = require("./routes/index")

const RUTA = 3030;
const path = require("path");

app.use(express.static('public'));

app.set("view engine", "ejs");



app.use("/", router);

app.use("/login", router);

app.use("/register", router);

app.use("/productDetail", router);

app.use("/productCart", router);




app.get("/productDetail", function(req, res){
    let dir1 = path.join(__dirname, "./views/productDetail.html")
  res.sendFile(dir1);
})

app.get("/productCart", function(req, res){
    let dir2 = path.join(__dirname, "./views/productCart.html")
    res.sendFile(dir2);
})


app.listen(RUTA, function(){
    console.log("Servidor levantado en puerto 3030")
});