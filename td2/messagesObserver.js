/*function sendMessage()
{
    var input = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    var newMessage = document.createElement("div");
    newMessage.setAttribute("class", "myMessage");
    newMessage.textContent = input;
    document.getElementById("chatBox").appendChild(newMessage);
}

*/

function createMessage(){
    var input = document.getElementById("userInput").value;
    var msg = new Message("onMessage", "834", "" , "lenin", Date.now());
}