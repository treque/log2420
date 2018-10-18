function check(element, i) {

    var checkBox = element;
    var dateBox = document.getElementsByClassName("date-box");
    var numberParticipating = document.getElementsByClassName("number-participating");
    var index = i;

    if(checkBox.className == 'new-availability'){
        checkBox.className = 'new-availability-checked';
        dateBox[i].style.backgroundColor = "#EBF7D4";
        numberParticipating[i].style.backgroundColor = "#EBF7D4";
    }
    else{

        checkBox.className = 'new-availability';
        dateBox[i].style.backgroundColor = "white";
        numberParticipating[i].style.backgroundColor = "white";
    }
}


  fetch('http://localhost:8000/cal-data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   
    var calendrier = data.Calendrier;
    var participants = data.Participants;

    for (var i = 0; i < calendrier.length; i++){

        var date = document.createElement("DIV");
        date.setAttribute("class", "date-box");
        date.setAttribute("id", "date" + i);

        var calendrierSplit = calendrier[i][0].split(" ");
        var month = document.createElement("span");
        month.setAttribute("class", "month");
        month.textContent = calendrierSplit[1];
        date.appendChild(month);

        var jour = document.createElement("span");
        jour.setAttribute("class", "date");
        jour.textContent = calendrierSplit[2];
        date.appendChild(jour);

        var day = document.createElement("span");
        day.setAttribute("class", "day");
        day.textContent = calendrierSplit[0];
        date.appendChild(day);

        var timeBegin = document.createElement("span");
        timeBegin.setAttribute("class", "time-begin");
        timeBegin.textContent = calendrierSplit[4].substr(0,5);
        date.appendChild(timeBegin);

        var timeEnd = document.createElement("span");
        timeEnd.setAttribute("class", "time-end");
        var hours = calendrierSplit[4].substr(0,2);
        hours = parseInt(hours);
        hours += calendrier[i][1]/60;
        timeEnd.textContent = hours + calendrierSplit[4].substr(2,3);
        date.appendChild(timeEnd);

        document.getElementById("dates-container").appendChild(date);   

    }

    if (1){
        var numberParticipants = document.createElement("span");
        numberParticipants.setAttribute("id", "number-participants");
        numberParticipants.textContent = participants.length + " participants";
        document.getElementById("number-participants").appendChild(numberParticipants);
    }

    for (var i = 0; i < calendrier.length; i++){
        var numberParticipating = 0;
        for (j = 0; j < participants.length; j++){
            if (participants[j].Disponibilités[i] == 1){
                numberParticipating++;
            }
        }
        
        // segment pour le tick
        var numberParticipatingElement = document.createElement("DIV");
        numberParticipatingElement.setAttribute("class", "number-participating");
        var image = document.createElement("IMG");
        image.setAttribute("src", "tick2.png");
        numberParticipatingElement.appendChild(image);

        // segment pour le nombre de participants a chaque date
        var numberParticipatingNumber = document.createElement("span");
        numberParticipatingNumber.setAttribute("class","number-participating");
        numberParticipatingNumber.textContent = numberParticipating;
        numberParticipatingElement.appendChild(numberParticipatingNumber);

        document.getElementById("number-participants-container").appendChild(numberParticipatingElement);
    }

    for (var i = 0; i < participants.length; i++){
        // segment pour l'image
        var participant = document.createElement("DIV");
        participant.setAttribute("class", "participant");
        var image = document.createElement("IMG");
        image.setAttribute("src", "particip2.png");
        participant.appendChild(image);

        // segment pour le nom du participant
        var name = document.createElement("span");
        name.setAttribute("class","participant");
        name.textContent = participants[i].Nom;
        participant.appendChild(name);
        
        document.getElementById("participants-container").appendChild(participant);
    }


    for (var i = 0 ; i < participants[0].Disponibilités.length; i++){
        var availabilityContainer = document.createElement("DIV");
        availabilityContainer.setAttribute("class", "availability-container");

        for (var j = 0 ; j < participants.length ; j++){
            var availability = document.createElement("DIV");
            if (participants[j].Disponibilités[i] == 1){
                availability.setAttribute("class", "available");
            }
            else{
                availability.setAttribute("class", "not-available");
            }
            availabilityContainer.appendChild(availability);
        }
        document.getElementById("availability-container-table").appendChild(availabilityContainer);
    }


  });

