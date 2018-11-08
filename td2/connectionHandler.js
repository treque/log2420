var username = "lenin";
var ws = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=" + username);

ws.onopen = function(){
    console.log("connexion succes");
}

ws.onerror = function(error){
    console.log(error);
}



// onMessage, onCreateChannel, onJoinChannel, onLeaveChannel, updateChannelsList, onError
ws.onmessage = function(event){
    // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
    // incoming messages
    var msg = JSON.parse(event.data);
    switch(msg.eventType){
        case "updateChannelsList":
            // creer un array de channels????????
            console.log("updateChannelsList");
            break;
        case "onMessage":
        // afficher le message
            displayMessage(msg.channelId, msg.data, msg.sender, msg.timestamp);
            console.log("message recu/envoye");
            break;
        case "onCreateChannel":
            console.log("creation de channel");
            break;
        case "onJoinChannel":
            console.log("joining channel");
            break;
        case "onLeaveChannel":
            console.log("left channel");
            break;
    }
    console.log(msg);
}
