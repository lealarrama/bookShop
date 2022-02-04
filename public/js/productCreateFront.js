window.addEventListener('load', function(){
    let formulario = document.querySelector('#formulario')
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombreReg = document.querySelector('#nombreReg')
        let errorNombre = document.querySelector('.errorNombre')
        if(nombreReg.value == ""){
            errorNombre.innerHTML = '<small>Debes escribir un nombre</small>'
            errorNombre.style.color = 'white'
        } else if(nombreReg.value.length < 5){
            errorNombre.innerHTML = '<small>El nombre debe tener al menos 5 caracteres</small>'
            errorNombre.style.color = 'white'
        }

        let descripcion = document.querySelector('#descripcion')
        let errorDescripcion = document.querySelector('.errorDescripcion')
        if(descripcion.value == ""){
            errorDescripcion.innerHTML = '<small>Debes escribir una descripción</small>'
            errorDescripcion.style.color = 'white'
        } else if(descripcion.value.length < 20){
            errorDescripcion.innerHTML = '<small>La descripción debe tener al menos 20 caracteres</small>'
            errorDescripcion.style.color = 'white'
        }
        
        let imagen = document.querySelector('#imagen')
        let errorImage = document.querySelector('.errorImage')
        if(imagen.value == ""){
            errorImage.innerHTML = '<small>Debes subir una imagen</small>'
            errorImage.style.color = 'white'
        }

        let genre = document.querySelector('#genre')
        let errorGenre = document.querySelector('.errorGenre')
        if(genre.value == ""){
            errorGenre.innerHTML = '<small>Debes elegir un genero</small>'
            errorGenre.style.color = 'white'
        }
        
        let precio = document.querySelector('#precio')
        let errorPrecio = document.querySelector('.errorPrecio')
        if(precio.value == ""){
            errorPrecio.innerHTML = '<small>Debes escribir un precio</small>'
            errorPrecio.style.color = 'white'

        }

        let descuento = document.querySelector('#descuento')
        let errorDescuento = document.querySelector('.errorDescuento')
        if(descuento.value == ""){
            errorDescuento.innerHTML = '<small>Debes escribir una contraseña</small>'
            errorDescuento.style.color = 'white'
        }

        else {
            formulario.submit();
        }
    })
})