/*
Autor: Elian Melo Morais
Data de Criação: 16/10/2018
Objetivo: Mostrar os códigos de quiz utilizados no curso da udacity
*/

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Elian",
    friends: 5,
    messages: ["I don't have money", "i want to break free"],
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function removeMessage(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend(){
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends -= 1;
    }
};
