function ingresaNumero(numeros){
    numeros =[]
    suma = 0
    for(let i = 0; i < 3; i++){
        numeros.push (parseInt(prompt("Ingresa un numero")))
        suma = suma + numeros[i]

    } 
    promedio = (suma / numeros.length)
    return promedio
}

