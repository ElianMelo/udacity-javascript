/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var str = "bottles";
var strAux = "bottles";

while (num >= 1) {
  var numAux = num - 1;

  if(num === 1){
    str = "bottle";
  }else{
    str = "bottles";
  }

  if(numAux === 1){
    strAux = "bottle";
  }else{
    strAux = "bottles";
  }

  console.log(num + " " + str + " of juice on the wall! " + num + " " + str + " of juice! Take one down, pass it around... " + numAux + " " + strAux + " of juice on the wall!");
  num = num - 1;
}
