const db = require('../data/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.User;


function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;
   
    let emailInCookie = req.cookies.email; 
    let userFromCookie = Users.findAll({
        where:{
             email: emailInCookie
             }   
        });
    
    if (emailInCookie) {
    req.session.userLogged = emailInCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
   res.locals.userLogged = req.session.userLogged;
    }
   
    next();
   }
   
   module.exports = userLoggedMiddleware;