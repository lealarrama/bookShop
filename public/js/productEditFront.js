window.addEventListener('load', function(){
    let formulario = document.querySelector('#editp-form')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombreReg = document.querySelector('#editp-nombre')
        let errorNombre = document.querySelector('.errorNombre')
        if(nombreReg.value == ""){
            errorNombre.innerHTML = '<small>Debes escribir un nombre</small>'
            errorNombre.style.color = 'white'
        } else if(nombreReg.value.length < 5){
            errorNombre.innerHTML = '<small>El nombre debe tener al menos 5 caracteres</small>'
            errorNombre.style.color = 'white'
        }

        let descripcionEdit = document.querySelector('#editp-descripcion')
        let errorDescripcion = document.querySelector('.errorDescripcion')
        if(descripcionEdit.value == ""){
            errorDescripcion.innerHTML = '<small>Debes escribir una descripción</small>'
            errorDescripcion.style.color = 'white'
        } else if(descripcionEdit.value.length < 20){
            errorDescripcion.innerHTML = '<small>La descripción debe tener al menos 20 caracteres</small>'
            errorDescripcion.style.color = 'white'
        }
        
        let imageEdit = document.querySelector('#image')
        let errorImage = document.querySelector('.errorImage')
        if(imageEdit.value == ""){
            errorImage.innerHTML = '<small>Debes subir una imagen</small>'
            errorImage.style.color = 'white'
        }

        let genreEdit = document.querySelector('#editp-genre')
        let errorGenre = document.querySelector('.errorGenre')
        if(genreEdit.value == ""){
            errorGenre.innerHTML = '<small>Debes elegir un genero</small>'
            errorGenre.style.color = 'white'
        }
        
        let precioEdit = document.querySelector('#editp-precio')
        let errorPrecio = document.querySelector('.errorPrecio')
        if(precioEdit.value == ""){
            errorPrecio.innerHTML = '<small>Debes escribir un precio</small>'
            errorPrecio.style.color = 'white'
        }

        let descuentoEdit = document.querySelector('#editp-descuento')
        let errorDescuento = document.querySelector('.errorDescuento')
        if(descuentoEdit.value == ""){
            errorDescuento.innerHTML = '<small>Debes escribir un descuento</small>'
            errorDescuento.style.color = 'white'
        }

        else {
            formulario.submit();
        }
    })
})