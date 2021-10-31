const head = [
    {
        id: 1,
        css: "/index.css",
    },
    {
        id: 2,
        css: "/login.css",
    },
    {
        id: 3,
        css: "/register.css",
    },
    {
        id: 4,
        css: "/productDetail.css",
    },
    {
        id: 5,
        css: "/productCart.css",
    }
]
    

const mainControllers = {
    
    
    index: function(req, res){
        res.render("index");
    },
    
    login: function(req, res){
        res.render("login");
    },

    register: function(req, res){
        res.render("register");

    },
    
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


module.exports = mainControllers;