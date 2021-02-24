//EXERCÍCIO 2
/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
*Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
*Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
*ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
*triângulo).
*/

function triangulo (lado1 = 1, lado2 = 2, lado3 = 3){
    let nomeTriangulo = ''
    if(lado1 === lado2 && lado1 === lado3){
        nomeTriangulo = 'equilátero'
    }
    else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        nomeTriangulo = 'escaleno'
    }
    else{
        nomeTriangulo = 'isósceles'
    }

    return console.log(`Com base em seus lados, o triângulo é o: ${nomeTriangulo}`)
}

triangulo(1,1,1)
triangulo(1,2,3)
triangulo(1,2,1)