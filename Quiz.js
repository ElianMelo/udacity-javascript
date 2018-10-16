/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

// your code goes here
if(musicians <= 0){
    console.log("not a group");
}else if(musicians == 1){
    console.log("solo");
}else if(musicians == 2){
    console.log("duet");
}else if(musicians == 3){
    console.log("trio");
}else if(musicians == 4){
    console.log("quartet");
}else{
    console.log("this is a large group");
}
