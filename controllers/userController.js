const { validationResult }= require('express-validator');
const path = require ('path');
const fs = require ('fs');
const User = require('../models/User');
const bcryptjs = require ('bcryptjs');



const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    login: function(req, res){
        res.render("login");
    },
    loginProcess: (req,res) => {
        let userToLogin = User.findByField('email',req.body.email);
    
        if(userToLogin){
        let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contrasenia)
        if(isOkThePassword){
            delete userToLogin.contrasenia;
            req.session.userLogged = userToLogin
            if(req.body.Recuerdame){
                res.cookie("email", req.body.email, { maxAge: (1000 * 60) * 60 })
                }
            return res.redirect('/users/profile/')
        }
        return res.render('login',{
            errors: {
                email:{
                    msg: 'Las credenciales son inválidas'
                    }
                }
        });
        }


        return res.render('login',{
            errors: {
                email:{
                    msg: 'No se encuentra este mail en nuestra base de datos'
                }
            }
        });
        },
    

    register: function(req, res){
        res.render("register");
    },

    processRegister: function(req, res){
        // return res.send({
        //     body: req.body,
        //     file: req.file
        // })
        let resultadoValidacion = validationResult(req);
        if(resultadoValidacion.errors.length > 0){
            return res.render('register',{
            errors:resultadoValidacion.mapped(),
            oldData:req.body})
            
        }
        let userInDB  = User.findByField('email', req.body.email);

        if(userInDB){
            return res.render('register',{
                errors:{
                    email:{
                        msg:'Este mail ya está registrado'
                    }
                },
                oldData: req.body
            })
        }
        

        let userToCreate = {
            ...req.body,
            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            //image: req.file.filename,
        }

        let userCreated = User.create(userToCreate)
        return res.redirect('/users/login')
    
    },
    profile: function(req, res){
        return res.render('profile',{
        user: req.session.userLogged});
    },


    logout: (req,res) =>{
        res.clearCookie("email");
        req.session.destroy();
        return res.redirect('/');
    },

}

module.exports = userController;