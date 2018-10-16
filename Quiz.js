/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    if(x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    }else if(x % 3 === 0){
        console.log("Julia");
    }else if(x % 5 === 0){
        console.log("James");
    }else{
        console.log(x);
    }
    x = x + 1;
}
