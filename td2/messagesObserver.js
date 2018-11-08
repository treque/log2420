function displayMessage(channel, data, sender, timestamp)
{
    var newMessage = document.createElement("div");
    if (sender == username){
        newMessage.setAttribute("class", "myMessage");
    }
    else {
        newMessage.setAttribute("class", "otherMessage");
    }
    newMessage.textContent = data;
    document.getElementById("chatBox").appendChild(newMessage);

}

function createMessage(){
    var input = document.getElementById("userInput").value;
    var msg = new Message("onMessage", "dbf646dc-5006-4d9f-8815-fd37514818ee", input , usename, Date.now());
    ws.send(JSON.stringify(msg));
    input = '';
}