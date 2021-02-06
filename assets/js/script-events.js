var apiKey = "AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v1/events.json?apikey=AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventId;

// var requestHeader = new Headers({
 //   'user-key': apiKey
//});

function eventName (){
    fetch (requestCityEventsUrl)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    
    })
}

$("#search-button-event").on("click", function(){
    console.log('Hello World')
    eventName ();
});