const { validationResult }= require('express-validator');
const path = require ('path');
const fs = require ('fs');
const bcryptjs = require ('bcryptjs');
const db = require('../data/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.User;

const userController = {
    login: function(req, res){
        Users.findAll().then(allUsers=>{
            res.render('login',{allUsers})
        })
    },
    loginProcess: (req,res) => {
        // const userToLoginEmail = Users.findAll({
        //      where:{
        //          email: {[Op.eq]:req.body.email},
        //      }
        // })
        // if(userToLoginEmail){
        //     const  userToLoginPassword = Users.findAll({
        //         where:{
        //             contraseña: {[Op.eq]:bcryptjs.hashSync(req.body.contrasenia, 10)},
        //         }
        //    });
        //     if(userToLoginPassword) {
        //         req.session.userLogged = userToLoginEmail
        //         if(req.body.Recuerdame){
        //             res.cookie("email", req.body.email, { maxAge: (1000 * 60) * 60 })
        //         }
        //         return res.redirect('/users/profile/')
        //     }
        //     return res.render('login',{
        //       errors: {
        //         email:{
        //             msg: 'Las credenciales son inválidas'
        //             }
        //         }
        //     });
        // }
        // return res.render('login',{
        //     errors: {
        //         email:{
        //             msg: 'No se encuentra este mail en nuestra base de datos'
        //         }
        //     }
        //  });
        Users.findOne({
             where:{
                    email:{[Op.eq]:req.body.email},
                    // contraseña: {[Op.eq]:bcryptjs.compareSync(req.body.contrasenia, 10)},
                },
         }).then(user => {
               if(user = true){
                   res.locals.isLogged = user
                 res.render('profile', {user});
               }else{
                   res.locals.isLogged = false
                   res.render('login')
              }
            console.log(user)
        }).catch(err=>{
                 console.log(err)
             })
    },
    register: (req, res)=>{
        Users.findAll().then(allUsers=>{
            res.render('register',{allUsers})
        }).catch((err)=>{
            res.send(err)
        })
    },
    processRegister: function(req, res){
        let resultadoValidacion = validationResult(req);
         if(resultadoValidacion.errors.length > 0){
            return res.render('register',{
            errors:resultadoValidacion.mapped(),
            oldData:req.body})
         }
        //  let userInDB = Users.findAll({
        //         where:{
        //             email: {
        //                 [Op.eq]:req.body.email
        //                 } 
        //             }
        //         }
        //     );
        //  if(userInDB = true){
        //      return res.render('register',{
        //         errors:{
        //              email:{
        //                 msg:'Este mail ya está registrado'
        //              }
        //          },
        //          oldData: req.body
        //      })
        //  }
         Users.create({
                 nombre: req.body.nombre,
                 apellido: req.body.apellido,
                 email: req.body.email,
                 contraseña:bcryptjs.hashSync(req.body.contrasenia, 10),
                 imagen: req.file.filename,
                 categorias_id: req.body.categoria
             }).then(user => {
                     res.redirect('/users/login');
                 }).catch((err)=>{
                     res.send(err)
                 })
    },
    profile: function(req, res){
        Users.findByPk(req.params.id).then(profile => {
                res.render('profile', {
                    user: req.session.userLogged});
            }).catch((err)=>{
                res.send(err)
            })
    },
    logout: (req,res) =>{
        res.clearCookie("email");
        req.session.destroy();
        return res.redirect('/');
    },
}
module.exports = userController;