const express = require("express");
const app = express();

const router = require("./routes/index");
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");

const RUTA = 3030;
const path = require("path");

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use("/", router);

app.use("/login", userRouter);

app.use("/register", userRouter);

app.use("/productDetail", productRouter);

app.use("/productCart", productRouter);

app.use("/createProduct", productRouter);

app.use("/editProduct", productRouter);



app.listen(RUTA, function(){
    console.log("Servidor levantado en puerto 3030")
});