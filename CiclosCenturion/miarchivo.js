 //Pedir un numero por prompt y sumarle otro numero por cada repeticion , realizando una salida por cada resultado

  let repetir = true;

  while(repetir){
    let numero1 = parseFloat (prompt("Ingrese un Numero"))
    let numero2 = parseFloat (prompt("Ingrese un Numero"))
    let resultado = numero1 + numero2;

    console.log(`El resultado de la suma es ${resultado}`)
    
    let confirmacion = prompt("Desea Ingresar mas numeros?").toLowerCase();
  
    if(confirmacion == "no" ){
      repetir = false;
    }
  }

