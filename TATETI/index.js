let contador = 0;

const titulo = ["TA", "-", "TE", "-", "TI"];
const tablero = document.getElementsByClassName("ficha");
const ganadores = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];
/*
const comparar = (control) =>{
        //ganador = false;
        tablero[control[0]].innerHTML === tablero[control[1]].innerHTML && 
        tablero[control[1]].innerHTML === tablero[control[2]].innerHTML &&
        tablero[control[2]].innerHTML !== "" 
        ? true : false;

        console.log("estoy comparando");
        
       
       

}*/

const verificarGanador = () => {
        let ganador = false;
        let f1 = tablero[0].innerText;
        let f2 = tablero[1].innerText;
        let f3 = tablero[2].innerText;
        let f4 = tablero[3].innerText;
        let f5 = tablero[4].innerText;
        let f6 = tablero[5].innerText;
        let f7 = tablero[6].innerText;
        let f8 = tablero[7].innerText;
        let f9 = tablero[8].innerText;
       
        
        if((f1 === f2 && f2 === f3 && f3 !== "") || (f4 === f5 && f5 === f6 && f6 !== "") || (f7 === f8 && f8 === f9 && f9 !== "")){
                ganador = true;
                console.log("horizontal");
        }else if((f1 === f4 && f4 === f7 && f7 !== "") || (f2 === f5 && f5 === f8 && f8 !== "") || (f3 === f6 && f6 === f9 && f9 !== "")){        
                ganador = true;
                console.log("vertical");
        }else if((f1 === f5 && f5 === f9 && f9 !== "") || (f3 === f5 && f5 === f7 && f7 !== "") ){ 
                  console.log("diagonal");
                ganador = true; 

        }else if(contador === 9 && ganador==false){
                document.querySelector("#turno").innerHTML = "Fue un Empate";   
                alert("Fue un empate!!");
        } 


console.log(ganador);
              

        if(ganador){
                alert(`Ganador: Jugador ${informarJugador()}`);
        }

}
 




const limpiar = () => {
        location.reload();
}

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
        document.querySelector(".container").style.visibility= 'visible';
        document.querySelector("#turno").style.visibility= 'visible';
        console.log(contador);
}

const informarJugador = () =>{
        let jugador = "";
        contador % 2 === 0 
        ? jugador = "2 " + "&#9874;"
        : jugador = "1 " + "&#9863;";

        return jugador;
}

const informarTurno = () => {
        //cambio el turno al otro jugador
        (contador +1) % 2 === 0 
        ? document.querySelector("#turno").innerHTML = "Turno Jugador 2" + " &#9874;"
        : document.querySelector("#turno").innerHTML = "Turno Jugador 1" + " &#9863;";
}


//detecto el click y pinto segun el color del jugador
const pintar = (id) =>{
        contador++; 
        console.log(contador);
        //segun el jugador pinto la casilla
      
        if(contador % 2 === 0){
                document.getElementById(id).style.backgroundColor = document.getElementById("favcolor2").value;
                document.getElementById(id).innerHTML = "&#9874;";
        }else{
                document.getElementById(id).style.backgroundColor  = document.getElementById("favcolor1").value;
                document.getElementById(id).innerHTML = "&#9863;";
        }

        verificarGanador() ? (alert(`Ganador: Jugador ${informarJugador}`)) : null;

    
        //cambio el turno al otro jugador
        informarTurno();

        //deshabilito casillas ya usadas
        document.getElementById(id).disabled = 'true'; 
         
        console.log(contador);
}


function start() {
        console.log(contador);
        setInterval(() => {
        cambiarColor(); // efecto de colores en el titulo
      }, 1000);

      //oculto objetos
      document.querySelector(".container").style.visibility = 'hidden';
      document.querySelector("#turno").style.visibility = 'hidden';
     
      //pongo color random a los jugadores
      document.getElementById("favcolor1").value = armaColor(); 
      document.getElementById("favcolor2").value = armaColor();

      //escucho para iniciar el juego
      document.getElementById("iniJuego").addEventListener("click", iniJuego);
      document.getElementById("reinicio").addEventListener("click", limpiar);

      //escucho para pintar las jugadas
      for (let i = 0; i < tablero.length; i++){
        tablero[i].addEventListener('click', () => pintar(tablero[i].id));
      }
         

}

window.onload = start;