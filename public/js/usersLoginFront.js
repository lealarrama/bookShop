window.addEventListener("load", function(){
    const formulario = document.getElementById("formulario")
    const email= document.getElementById("email")
    const password = document.getElementById("password")
    const btnSubmit = document.getElementById("btnSubmit")
    const erEmail= document.querySelector(".erEmail")
    const erPassword= document.querySelector(".erPassword")


    btnSubmit.addEventListener("click", function(evento){
        evento.preventDefault()
        let errors={ }
        if(email.value == null){
            errors.email= "Este campo debe estar completo"    
        } 
        if(password.value == null){
            errors.password= "Este campo debe estar completo"    
        }
        if(Object.keys(errors).length >= 1){
            erEmail.innerText = (errors.email) ? errors.email : '';
            erPassword.innerText = (errors.password) ? errors.password : '';
        } else {
        formulario.submit();
        }
        
      })



})