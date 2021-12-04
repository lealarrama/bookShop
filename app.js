const express = require("express");
const app = express();


const router = require("./routes/index");
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


const RUTA = 3030;
const path = require("path");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE



app.set("view engine", "ejs");

app.use("/", router);

app.use("/users", userRouter);

app.use("/products", productRouter);

app.listen(RUTA, function(){
    console.log("Servidor levantado en puerto 3030")
});