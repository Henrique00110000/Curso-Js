let valores = [5, 8, 9, 3]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])

for (var c = 0; c < valores.length; c++) {
    console.log(`${valores[c]}`)
}
*/

for ( let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}