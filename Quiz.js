/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = /* finish the function expression */
function(quant){
    var risada = "";
    for(var i = 1; i <= quant; i++){
        risada += "ha";
    }
    risada += "!";
    return risada;
}


console.log(laugh(10));
