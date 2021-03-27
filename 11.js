//EXERCÍCIO 11
/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(dia){
    let mensagem = ''
    switch(dia){
        case 1:
            mensagem = 'Domingo, fim de semana'
            break
        case 2:
            mensagem = 'Segunda, dia útil'   
            break 
        case 3:
            mensagem = 'Terça, dia útil'   
            break 
        case 4:
            mensagem = 'Quarta, dia útil'   
            break 
        case 5:
            mensagem = 'Quinta, dia útil'   
            break
        case 6:
            mensagem = 'Sexta, dia útil'   
            break   
        case 7:
            mensagem = 'Sábado, fim de semana'
            break
        default:
            mensagem = 'Dia inválido!'   
            break  
    }

    return mensagem
}

console.log(diaUtil(2))