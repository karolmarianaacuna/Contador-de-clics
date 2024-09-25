/* inicializamos la variable que va a capatar los datos */
let contador = 0;

/* OJO se utiliza let porque es el tipo de variable que se deja modificar y cambiar  */
function contadorClicks(){

  contador++;
  document.getElementById("feedback").textContent = " la cantidad de clicks que haz hecho es de "+contador;
 

}

function Reiniciar(){

    contador = 0; // Reiniciamos el contador a 0
    document.getElementById("feedback").textContent = "La cantidad de clics que has hecho es de " + contador; 
   
  
  }