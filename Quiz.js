/*
Autor: Elian Melo Morais
Data de Criação: 16/10/2018
Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(showValues);

function showValues(element, index, array){
    console.log(array[index].type + " donuts cost $" + array[index].cost + " each");
}
