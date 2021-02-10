var apiKey = "&apikey=HdUpfRdxPBo83eRtcVM59jw7R5KhxSeq&per_page=10";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=";
var eventName;
var apiKey = "&apikey=HdUpfRdxPBo83eRtcVM59jw7R5KhxSeq&per_page=10";
var requestCityEventsUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=";
var eventName;
var eventDate = "mm, dd, yyyy";
var eventTime = "hh, mm"
var eventDescription;
var eventImg;
var eventPrice;
var eventId;
var eventsFieldEl = $('#events-field');
var userContainer = $("#event-list");
var listEventItem = $("li");

//This function populates and displays the data on the browser.
function eventResults (displayEvents) {
    for (var i = 0; i < displayEvents.length; i++){
        
    var eventsField = $("<div>").addClass("card event-field has-background-light");
    var eventMainSection = $("<section>").addClass("columns card-content");
    var eventImg = $("<figure>").addClass("column");
    // If url is null, then we display an img placeholder.
    if (displayEvents[i].images[0].url === "") {
        var imgEvent = $("<img>").attr({ src: "assets/images/cat-placeholder.png" });
    } else {
        var imgEvent = $("<img>").attr({ src: displayEvents[i].images[0].url, alt: displayEvents[i].images[0].url });
    }
    var venue = $("<figcaption>").text(displayEvents[i]._embedded.venues.name);
    var eventNameSection =  $("<div>").addClass("column media-content");
    var eventName = $("<p>").addClass("title is-3").text(displayEvents[i].name);
    var eventDateAndTime = $("<p>").addClass("title is-4").text(displayEvents[i].start);
    var eventPriceRangeMin = $("<p>").addClass("subtitle is-5").text(displayEvents[i].priceRanges[0].min + " - ");
    var eventPriceRangeMax = $("<span>").addClass("subtitle is-5").text(displayEvents[i].priceRanges[0].max + " ");
    var eventPriceRangeCurrency = $("<span>").addClass("subtitle is-5").text(displayEvents[i].priceRanges[0].currency);
    var infoColumn = $("<div>").addClass("row card-content");
    var ticketURL = $("<a>").attr("href", displayEvents[i].url).text("Purchase your tickets!")
    var ticketNote = $("<span>").text("PLEASE NOTE: " + displayEvents[i].pleaseNote);
    var ticketLimit = $("<p>").text(displayEvents[i].accessibility.ticketLimit);
    var ageRestrictions = $("<p>").text(displayEvents[i].ageRestrictions.legalAgeEnforced);
    var accessibility = $("<p>").text(displayEvents[i]._embedded.venues[0].accessibleSeatingDetail);
    var generalInfo = $("<p>").text(displayEvents[i]._embedded.venues[0].generalInfo);

    $("#events-field").append(eventsField);
        eventsField.append(eventMainSection);
        eventMainSection.append(eventImg, eventNameSection);
        eventImg.append(imgEvent, venue);
        eventNameSection.append(eventName);
        eventName.append(eventDateAndTime);
        eventNameSection.append(eventPriceRangeMin.append(eventPriceRangeMax, eventPriceRangeCurrency));
        eventNameSection.append(infoColumn);
        infoColumn.append(ticketURL);
        infoColumn.append(ticketNote.append(ticketLimit, ageRestrictions, accessibility, generalInfo));

    }
}
// Grabbing info from API
function eventApiCall (cityName){
    fetch (requestCityEventsUrl + cityName + apiKey)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data._embedded.events);
        var displayEvents = data._embedded.events
for (var i = 0; i < data._embedded.events.length; i++)
        {
        // Populating the events
        var eventName = data._embedded.events[i].name;
        }
        eventResults (displayEvents);
    })
}


$("#search-button-event").on("click", function(event){
    event.preventDefault();
    console.log('Hello World')

    var eventNameInput = $("#search-input-city").val();
    var eventDateSelect = $("#search-input-event").val();
        console.log(eventNameInput);


    eventApiCall (eventNameInput);
});

// Need to be able to pull every event name (one variable)
// Make a function to populate the list (append)
// Ensure that the loop actually stops at 10 per page (console log)
// 