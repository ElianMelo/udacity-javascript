/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers(time){
    if(time.length >= 7){
        return true;
    }else{
        return false;
    }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
