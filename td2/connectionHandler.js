var connection = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=vfflLe");

var msg = new Message("onMessage", "834", "" , "lenin", "Date.now()");
connection.onopen = function(){
    console.log("conneeeeeeeeeeeeexion");
    connection.send(JSON.stringify(msg));
};

connection.onerror = function(error){
    console.log(error);
}

connection.onmessage = function(event){
    console.log(event.data);
}
