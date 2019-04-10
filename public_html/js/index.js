
function agregarProducto(valor1,valor2){
    let cart = document.querySelector('.cart').innerHTML;
    let html = "<div class='item'><b>"+ valor1 +"</b><p>Precio: <b>$"+ valor2 +"</b></p></div>";
    document.querySelector('.cart').innerHTML = cart + html;
}


agregarProducto("Brocoli","10");