const path = require("path");
const fs = require("fs");

const mainControllers = {
     //Home
     index: function (req,res){
        const productsFilePath = path.join(__dirname, '../data/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let terror = products.filter(product=>{
            return product.gender == "Terror";
        })
        let suspenso = products.filter(product=>{
            return product.gender == "Suspenso";
        })
        let fantasía = products.filter(product=>{
            return product.gender == "Fantasía";
        })
        res.render("index", {fantasía, suspenso, terror});
    },
}


module.exports = mainControllers;