const path = require('path');
const { body, check } = require('express-validator');


const usersValidation = [
    body('nombre').notEmpty().withMessage('Debes completar este campo'),
    body ('apellido').notEmpty().withMessage('Debes completar este campo'),
    body ('email').notEmpty().withMessage('Debes completar este campo').bail()
    .isEmail().withMessage('Ingrese e-mail válido'),
    body('contrasenia').notEmpty().withMessage('Debes completar este campo').bail()
    .isLength({min:5}).withMessage('La contraseña debe tener como mínimo 5 caracteres'),
    body('image').custom((value, {req})=>{
        const file = req.file
         let acceptedExtensions =['.jpg','.jpeg','.png','.gif']
        
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

   )
]
module.exports = usersValidation;