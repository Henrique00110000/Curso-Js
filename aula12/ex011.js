var idade = 66
console.log(`A sua idade é ${idade}`)
if(idade < 16){
    console.log(`Você nao pode votar`)
}else if(idade < 18 || idade > 65 ){
    console.log(`Seu Voto e opcional`)
}else {
    console.log(`Seu Voto e Obrigatório`)
}
