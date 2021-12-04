const { validationResult }= require('express-validator');
const path = require ('path');
const fs = require ('fs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    login: function(req, res){
        res.render("login");
    },

    register: function(req, res){
        res.render("register");
    },

    processRegister: function(req, res){
        let resultadoValidacion=validationResult(req);
        if(resultadoValidacion.errors.length > 0){
            return res.render('register',{
            errors:resultadoValidacion.mapped(),
            oldData:req.body})
            
        }
           return res.send('Ok, las validaciones se pasaron y no tienes errores')
    
    },
    profile: function(req, res){
        res.render("profile");
    },


}

module.exports = userController;