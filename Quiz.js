/*
Autor: Elian Melo Morais

Data de Criação: 16/10/2018

Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if(checkBalance === false){
    console.log("Thank you. Have a nice day!");
}else if(isActive === true && balance > 0){
    console.log("Your balance is $" + balance + ".");
}else if(isActive !== true){
    console.log("Your account is no longer active.");
}else if(balance === 0){
    console.log("Your account is empty.");
}else{
    console.log("Your balance is negative. Please contact bank.");
}
