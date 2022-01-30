const path = require('path');
const { body, check } = require('express-validator');


const productsValidation = [
    body('name').notEmpty().withMessage('Debes completar este campo'),
    body ('description').notEmpty().withMessage('Debes completar este campo')
    .isLength({min:20}).withMessage('La descripción debe tener como mínimo 20 caracteres'),
    body ('genre').notEmpty().withMessage('Debes completar este campo').bail(),
    body('price').notEmpty().withMessage('Debes completar este campo').bail().isNumeric(),
    body ('discount').notEmpty().withMessage('Debes completar este campo').bail().isNumeric(),
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
module.exports = productsValidation;