<<<<<<< HEAD
var apiKey = "AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA?per_page=10";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventTime = "hh, mm"
var eventDescription;
var eventImg;
var eventPrice;
var eventId;

$("event-field")
function searchForEvents (eventId);

fetch(requestCityEventsUrl), {
    .then(function(response) {
    return response.json(; (
    .then(function ())
        ))
    }
}
=======

var apiKey = "AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=AXOMxmsvD7ZvGtAeXwRTcRXfQTgygigA";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventId;

>>>>>>> 027f19d17f1de870c2f7351acf09b5abf97c3df7
function eventName (){
    fetch (requestCityEventsUrl)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
<<<<<<< HEAD
for (var = 0; i < data.length; i++)
        {
        var eventName = document.createElement("h2");
        var eventDate = document.createElement("h5");
        var eventTime = document.createElement("h6");
        var eventDescription = document.createElement("p");
        var eventImg = document.createElement("placeholder");
        
        eventName.textContent = date[i].embedded.events.name;
        eventDate.textContent = date[i].embedded.events.initialStartDate.localDate;
        eventTime.textContent = date[i].embedded.events.initialStartDate.localTime;
        eventDescription.textContent = date[i].embedded.events.info;
        eventImg = date[i].embedded.events.images;
        }
=======
    
>>>>>>> 027f19d17f1de870c2f7351acf09b5abf97c3df7
    })
}

$("#search-button-event").on("click", function(event){
    event.preventDefault();
    console.log('Hello World')

    var eventNameInput = $("#search-input-city").val();
    var eventDateSelect = $("search-input-event").val();
        console.log(eventNameInput);


    eventName ();
<<<<<<< HEAD
});
=======
});
>>>>>>> 027f19d17f1de870c2f7351acf09b5abf97c3df7
