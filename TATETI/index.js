
const titulo = ["TA", "-", "TE", "-", "TI"];


const armaColor = () =>{
        const digito = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
                color = color + digito[Math.floor(Math.random() * 16)];  
        }
        return color;

}

const cambiarColor = () =>{
  
    document.getElementById("ta").style.color = armaColor(); 
    
    document.getElementById("te").style.color = armaColor(); 
    
    document.getElementById("ti").style.color = armaColor();        
  
}

//inicializo el juego
const iniJuego = () =>{
       
        document.querySelector("#favcolor1").disabled = 'true'; 
        document.querySelector("#favcolor2").disabled = 'true'; 
        document.querySelector(".inicial").style.color = 'grey'; 
        document.querySelector("#iniJuego").disabled = 'true'; 
        document.querySelector("#iniJuego").hidden= 'true';
        document.querySelector(".tablero").style.visibility= 'visible';
        document.querySelector("#turno").style.visibility= 'visible';
        console.log(document.querySelector("#favcolor1").value);
       
}    
//detecto el click y pinto segun el color del jugador
const pintar = (e) =>{
        console.log(e);

        //segun el jugador pinto la casilla
        document.querySelector("#turno").innerHTML == "Turno Jugador 1" 
        ? e.target.style.background =  document.getElementById("favcolor1").value
        : e.target.style.background =  document.getElementById("favcolor2").value

        //cambio el turno al otro jugador
        document.querySelector("#turno").innerHTML == "Turno Jugador 1" 
        ? document.querySelector("#turno").innerHTML = "Turno Jugador 2"
        : document.querySelector("#turno").innerHTML = "Turno Jugador 1"

        //deshabilito casillas ya usadas
        e.target.disabled = 'true'; 
        

}


function start() {
        setInterval(() => {
        cambiarColor(); // efecto de colores en el titulo
      }, 1000);

      //oculto objetos
      document.querySelector(".tablero").style.visibility = 'hidden';
      document.querySelector("#turno").style.visibility = 'hidden';
     
      //pongo color random a los jugadores
      document.getElementById("favcolor1").value = armaColor(); 
      document.getElementById("favcolor2").value = armaColor();

      //escucho para iniciar el juego
      document.getElementById("iniJuego").addEventListener("click", iniJuego);

      //escucho para pintar las jugadas
      document.querySelector(".tablero").addEventListener("click",  pintar);
         

}

window.onload = start;