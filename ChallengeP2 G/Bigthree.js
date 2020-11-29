function ingresaNumero(numeros){
    numeros =[]
    for(let i = 0; i < 3; i++){
        numeros.push (parseInt(prompt("Ingresa un numero")))
        mayor= (Math.max(...numeros))  
    } 
    console.log(mayor)
}

