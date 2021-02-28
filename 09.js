//Exercício 9
/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisivelPor3(numero){
    let retorno
    if(numero%3 === 0){
        retorno = true
    }
    else{
        retorno = false
    }
    return retorno
}

console.log(divisivelPor3(9))