/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "ballroom") {
    weapon = "poison";
    solved = true;
} else if (room == "gallery") {
    weapon = "trophy";
    solved = true;
} else if (room == "billiards room") {
    weapon = "pool stick";
    solved = true;
} else {
    weapon = "knife";
    solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room  + " with the " + weapon + "!");
}
