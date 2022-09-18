/* Preste atenção na ordem do condigo, A ordem influencia o resultado do códigos*/

let num = [5, 8, 9, 3]
num.push(1)
console.log(num)
num.sort()
console.log(`Nosso vetor é ${num}`);
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(1)
if (pos == -1){
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}