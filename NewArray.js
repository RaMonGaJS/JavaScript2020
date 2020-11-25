function newArray(){
numeros = [1, 2, 3]
letras = ["a", "b", "c"]
nuevoArray = []
for (let i =0; i < numeros.length; i++){
    nuevoArray.push(numeros[i])
}
for (let i =0; i < letras.length; i++){
    nuevoArray.push(letras[i])
}
return nuevoArray
}
