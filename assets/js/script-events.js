
var apiKey = "HdUpfRdxPBo83eRtcVM59jw7R5KhxSeq";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=HdUpfRdxPBo83eRtcVM59jw7R5KhxSeq&per_page=10";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventTime = "hh, mm"
var eventDescription;
var eventImg;
var eventPrice;
var eventId;
var eventsFieldEl = $('#events-field');

eventsFieldEl.css("display", "none");

$("events-field")
// function searchForEvents (eventId);

// fetch(requestCityEventsUrl), {
//     .then(function(response) {
//     return response.json(; (
//     .then(function ())
//         ))
//     }
// }
function eventName (eventId){
    fetch (requestCityEventsUrl)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
for (var i = 0; i < data.length; i++)
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
