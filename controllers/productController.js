const productController = {
    // products: function (req, res) {
    //     res.render("productDetail");
    // },

    productDetail: function(req, res){
        res.render("productDetail");
    },
    
    productCart: function(req, res){
        res.render("productCart");
    },
    
    createProduct: function(req, res){
        res.render("createProduct");
    },

    editProduct: function(req, res){
        res.render("editProduct");
    },
}

module.exports = productController;