
function sumarNumeros(numeros){
    numeros = []
    suma = 0
    for(let i = 0; i < 5; i++){
        numeros.push (parseInt(prompt("Ingrese un numero")))
        suma =  suma + numeros[i]
    }
return suma
}