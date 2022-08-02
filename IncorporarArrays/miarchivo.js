
const clientes = ["adriana", "lucas" , "filomena", "anacleta"]; //array de clientes

console.log(clientes.join(", "));

let clienteOF = prompt("Ingrese al cliente que desea dar de baja.").toLowerCase(); 

let indice = clientes.indexOf(clienteOF); //busca el indice y lo guarda en la variable indice.
//si encuentra el nombre en el array devuelve el nro de indice , sino encuentra devuelve - 1 (ya que no existe indice -1)
if(indice != -1){
clientes.splice(indice,1) //1ºelemento el indice,2ºelemento:la cantidad de elementos a eliminar 1, en este caso.
} else {
   alert("Cliente no encontrado,intente nuevamente porfavor.")
}

console.log(clientes);//corrovoro, si se elimino el array.