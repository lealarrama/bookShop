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

app.use("/createProduct", router);



app.listen(RUTA, function(){
    console.log("Servidor levantado en puerto 3030")
});