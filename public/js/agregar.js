window.onload = function (){
    const btnAgregar = document.getElementById("btn-agregar")
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    btnAgregar.addEventListener('click', function(e){
        console.log("clicked")
        e.preventDefault();
        let url = window.location.href.split("/");
        let id = url [url.length -1]
        
        let imagen = document.querySelector('#imagen').getAttribute("src")
        let tituloProd = document.querySelector('#titulo').innerText
        let precio = document.querySelector('#precio').innerText
        let inputCantidad = document.querySelector('#cantidad').value

        let producto = {
            idProducto: id, 
            imagen,
            tituloProd, 
            precio: precio,
            // descuento: parseFloat(descuento),
            inputCantidad: inputCantidad
        }
        // console.log(producto)

        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio * producto.inputCantidad)
            
        } else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

       
            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
                // console.log(arrayProductos)
            }
        

            let totalCarrito = 0
            for (let i = 0; i < carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)
        }
        alert('Agregaste' + " " + tituloProd + " al carrito")
         
    })


  //   if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  //   ) {
  //     let div = document.getElementById("vacio");
  //     div.innerHTML += "<h2>No hay productos agregados </h2>";
  //   } else {
  //     let carrito = JSON.parse(localStorage.carrito);
  //     for (let i = 0; i < carrito.length; i++) {
  //       let producto = carrito[i];
  //       let div = document.querySelector(".vacio");
  //       let contenido = `  
  //       <div class="pcart-conteinerDesc">
  //       <a href="/products/detail" class="pcart-imagenes"><img ${producto.imagen} alt=""
  //               class="pcart-foto"></a>
  //       <div class="pcart-descripcion">
  //           <h2 class="pcart-nombre-libro">${producto.tituloProd}</h2>
  //           // <!-- <div class="pcart-estrellas">
  //           //     <i class="fas fa-star"></i>
  //           //     <i class="fas fa-star"></i>
  //           //     <i class="fas fa-star"></i>
  //           //     <i class="fas fa-star"></i>
  //           //     <i class="fas fa-star"></i>
  //           // </div> -->
  //           <p class="pcart-texto">Formato papel, Español - Stephen King</p>
  //           <p class="pcart-texto"> Disponible en Argentina en 5 días habiles</p>
  //       </div>
  //   </div>
    
  //       <div class="pcart-parte-derecha-descripcion">
  //       <form action="#" method="GET">
  //       <label for="cantidad"></label>
  //       <input class="pcart-texto" id="cantidad" value=${producto.inputCantidad} type="text">
  //       </form>
  //       <h3 class="pcart-precio">ARS${toThousand(producto.precio)} </h3>
  //       <button  type="button" class="pcart-boton-eliminar">
  //                       <i onclick="borrarItem(${i})" class="fas fa-times"></i> Eliminar
  //                   </button>
  //       </div>`;
  
  //       div.innerHTML += contenido;
  //     }
  //   }
  
  //   let h3 = document.querySelector("#precioTotal")
  //   let totalCarrito = localStorage.totalCarrito
  //   if(typeof localStorage.totalCarrito == 'undefined'){
  //     let contenido2 = `0`
  //     h3.innerHTML += contenido2
  //   } else {
  //     let contenido2 = `${toThousand(totalCarrito)}`
  //     h3.innerHTML += contenido2
  //   }
  
    
  // };
  
  // function borrarItem(id) {
  //   let carrito = JSON.parse(localStorage.carrito);
  //   carrito = carrito.filter((producto, i) => {
  //     return i !== id;
  //   });
  
  //   localStorage.setItem("carrito", JSON.stringify(carrito));
  //   location.reload();
  // }
  
  

  // let botonBorrar = document.getElementById("cart-botonBorrar");
  // botonBorrar.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   localStorage.clear();
  //   alert('has vaciado el carrito');
  //   location.reload();
  // })
    



  }