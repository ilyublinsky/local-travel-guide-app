var apiKey = "AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventId;

function eventName (){
    fetch (requestCityEventsUrl)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    
    })
}

$("#search-button-event").on("click", function(event){
    event.preventDefault();
    console.log('Hello World')

    var eventNameInput = $("#search-input-city").val();
    var eventDateSelect = $("search-input-event").val();
        console.log(eventNameInput);


    eventName ();
});