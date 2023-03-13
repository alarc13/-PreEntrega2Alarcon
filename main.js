const productos = [
    { nombre: "pan", precio: 1},
    { nombre: "leche", precio: 2},
    { nombre: "mermelada", precio: 3},
    { nombre: "chocolate", precio: 2},
    { nombre: "queso", precio: 4},
    { nombre: "tomate", precio: 2},
];

let carrito = [];

let mensaje = prompt("Hola, quiere comprar algun producto? Escriba si o no")

while(mensaje != "si" && mensaje != "no"){
    alert("por favor ingresa si o no");
    mensaje = prompt("Hola, desea comprar algo si o no");
};
if(mensaje == "si"){
    alert("Estos son nuestros productos:")
    let todosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "€");
    alert(todosProductos.join(", "));
}else if(mensaje == "no"){
    alert("Gracias, hasta pronto!");
}
while(mensaje != "no"){
    let producto = prompt("Agrega un producto al carrito");
    let precio = 0;

    if(producto == "pan" || producto == "leche" || producto == "mermelada" || producto == "chocolate" || producto == "queso" || producto == "tomate"){
        switch(producto) {
            case "pan":
                precio = 1;
            break;
            case "leche":
                precio = 2;
            break;
            case "mermelada":
                precio = 3;
            break;
            case "chocolate":
                precio = 2;
            break;
            case "queso":
                precio = 4;
            break;
            case "tomate":
                precio = 2;
            break;
            default:
                break;
            
        }
    let cantidad = parseInt(prompt("¿Cuantas unidades quiere?"));
    carrito.push({producto,cantidad,precio})
        console.log(carrito)
    }else {
        alert("producto  no disponible");
    }
    mensaje = prompt("¿Desea seguir comprando?")

    while(mensaje == "no"){
        carrito.forEach((carritoTotal) => {
            console.log(`producto: ${carritoTotal.producto}, unidades: ${carritoTotal.cantidad * carritoTotal.precio}`);
        })
        break;
    }
}
const total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
alert(`El total a pagar de su compra es: ${total}€`);
alert("Gracias por tu compra!");
