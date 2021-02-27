//EXERCÍCIO 7
/*
*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
*registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
*mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
*pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
*vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
*jogo. (Número do pior jogo).
*Obs.: O primeiro jogo não conta como novo recorde do melhor.
*Exemplo:
*String: “10 20 20 8 25 3 0 30 1”
*Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
*aconteceu no sétimo jogo.)
******/

function listaPontos(stringPontos = ""){
    let listaTotal = []
    let numAnterior = 0
    let recorde = 0
    let menorPontuacao = 0
    let listaResultado = []
    listaTotal = stringPontos.split(' ');

    for(let i = 0; i < listaTotal.length; i++){
        if(i === 0){}
        else if(numAnterior < parseInt(listaTotal[i])){
           recorde++
        }
        if(Math.min(parseInt(listaTotal)) === parseInt(listaTotal[i])){
            menorPontuacao = i + 1
        }
        numAnterior = parseInt(listaTotal[i])
    }
    listaResultado = [recorde, menorPontuacao]
    return console.log(`O recorde foi batido ${listaResultado[0]} vezes e a menor pontuação foi no jogo ${listaResultado[1]}.`)
}

listaPontos('2 20 30 40 50 4')