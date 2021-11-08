const express = require('express');
const userRouter = express.Router();

const userController= require("../controllers/userController");

/* GET login page. */
userRouter.get('/login', userController.login);

/* get register page*/
userRouter.get('/register', userController.register);

 
module.exports = userRouter;
