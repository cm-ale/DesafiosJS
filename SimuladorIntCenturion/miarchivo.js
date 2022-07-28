 
 //Calcular costo total de productos y/o servicios seleccionados por el usuario.

let resultado = 0;
let contador = 0;
let repetir = true;

while(repetir){
      let producto = parseFloat(prompt("Ingrese el precio del producto."));
     
      if(isNaN(producto)){
        console.log("Numero No valido.");
        continue;
      }

      resultado += producto; // suma los productos ingresados,es decir resultado = resultado + producto
      contador++; //cuenta la cantidad de productos ingresados.
      console.log(`El costo total de Productos es $ ${resultado}`)
      console.log(contador);
      
      let confirmacion = prompt("Desea seguir ingresando Productos SI/NO ?").toLowerCase();

      if(confirmacion == "no" ){
      repetir = false;
      }
}