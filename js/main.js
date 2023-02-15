let btn_compra = document.querySelectorAll('.btn_compra');
let contadorCarrito = 0;
let carrito = JSON.parse(localStorage.getItem('producto')) || [];


if (localStorage.length === 0) {
  contadorCarrito = 0;
} else {
  contadorCarrito = localStorage.length;
}
 

function agregar_a_carrito(event) {
  let hijo = event.currentTarget
  let padre = hijo.parentNode;
  let abuelo = padre.parentNode;
  let precio = abuelo.querySelector('.wine-price').textContent;
  let nombre_producto = abuelo.querySelector('h3').textContent;
  let img_producto = padre.querySelector('img').src;

  let nuevoProducto = {
    nombre: nombre_producto,
    precio: precio,
    img: img_producto,
    cantidad: 1
  }

  carrito.push(nuevoProducto)
  localStorage.setItem(`producto-${contadorCarrito}`, JSON.stringify(nuevoProducto));
  contadorCarrito++;
  console.log(carrito)
  console.log("Producto Agregado!");
  mostrarCarrito(nuevoProducto)
  Toastify({
    text:"Agregado a carrito",
    duration:3000,
    gravity:"bottom",
    position:"left",
    
  }).showToast();
}

for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_a_carrito);
}

function mostrarCarrito(producto) {
  let fila = document.createElement('tr')
  fila.innerHTML = `<td><img src=${producto.img}></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn_borrar">Borrar</button></td>`

  const elementoPadre = document.querySelector('.tbody');

  elementoPadre.append(fila)

  let btn_borrar = document.querySelectorAll('.btn_borrar')
  for (let boton of btn_borrar) {
    boton.addEventListener("click", borrar_producto);
  }

}

function borrar_producto(event) {
  return event.target.parentNode.parentNode.remove();

}

// Inicializacion de constante menuBtn seleccionando a .menu-btn
const menuBtn = document.querySelector('.menu-btn');
const none = document.querySelector('.secondary');


//Inicializacion de variable menuOpen inicializado en false
let menuOpen = false;

//Se le agrega una funcion en la cual escucha el mouse y si este es igual a click, si el menu no esta abierto . se agrega al menu-btn , la clase open y menuOpen pasa a ser true
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    none.classList.add('visible');
    //De lo contrario se remove el open y pasa menuOpen a False
  } else {
    menuBtn.classList.remove('open');
    none.classList.remove('visible');
    menuOpen = false
  }
});

Swal.fire({
  
  
  html:`<p class="vinos-pop-up">Proba nuestro nuevo vino</p>
  <div class="card cards-1">
  <div class="img-card-pop-up">
      <img src="./assets/images/png/vinoprueba.png" alt="vino prueba" class="vino-image">
      

  </div>
  
</div>`
  
});
