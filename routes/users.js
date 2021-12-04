const express = require('express');
const userRouter = express.Router();
const { check } = require('express-validator');
const multer = require ('multer');
const path = require ('path');
const fs = require ('fs');

// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback (null, path.join(__dirname,'../public/img/products'))
    },
    filename: (req,file, callback)=>{
        callback (null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})




const validation = [
    check('nombre').notEmpty().withMessage('Debes completar este campo'),
    check ('apellido').notEmpty().withMessage('Debes completar este campo'),
    check ('email').notEmpty().withMessage('Debes completar este campo').bail()
    .isEmail().withMessage('Ingrese e-mail válido'),
    check('contrasenia').notEmpty().withMessage('Debes completar este campo').bail()
    .isLength({min:5}).withMessage('La contraseña debe tener como mínimo 5 caracteres'),
    check('image').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions =['.jpg','.png','.gif']
        
        if(!file){
            throw new Error('Tienes que subir una imagen');

        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ') }`);
            }
 
        }
       return true
    }

    )]

const userController= require("../controllers/userController");

/* GET login page. */
userRouter.get('/login', userController.login);

/* get register page*/
userRouter.get('/register', userController.register);

// Validacion de registro
userRouter.post('/register',upload.single('image'),validation,userController.processRegister);

// Perfil de usuario
userRouter.get('/profile/:id', userController.profile);




module.exports = userRouter;
