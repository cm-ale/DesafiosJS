 
 //Calcular costo total de productos y/o servicios seleccionados por el usuario.

function sumProduc (produc1 = 0 ,produc2 = 0){
  console.log("Detalle de la suma de Productos");
  console.log(`Producto 1 : $ ${produc1}`);
  console.log(`Producto 2 : $ ${produc2}`);
  alert(`El costo total de Productos es $ ${(produc1 + produc2)}`);
  }

  let produc1,produc2
  do{
    produc1 = parseFloat(prompt("Ingrese el precio del producto."));
    produc2 = parseFloat(prompt("Ingrese el precio de otro producto."));
  }
  while(isNaN(produc1) || isNaN(produc2))
  sumProduc (produc1,produc2);