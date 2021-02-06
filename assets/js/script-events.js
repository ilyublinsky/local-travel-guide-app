var apiKey = "0e7YuLyBXAv1Qsa4vk3zxLO5vQfTjoN5x"
var requestUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}`

var requestHeader = new Headers({
    'user-key': apiKey
})
function searchCity(cityName) {
    // building the complete api call url by adding the cityName parameter to the base url
    // note the second parameter to the fetch() call, which is an object with a "headers"
    // property, which I set equal to our requestHeader object from earlier
    fetch(citiesUrl + cityName)

    .then(function (response) {
        return response.json()
    }).then(function (data) {
        // log the returned data.
        // (Look at the "location_suggestions" property of the returned object)
        console.log(data);
    })
}

searchCity("Seattle");

function getRestaurantsAround(cityNameInput) {

};

$("#search-button-rest").on("click", function () {
    var cityNameInput = $("#search-input-city").val();
    var restaurantNameSelect = $("#search-input-rest").val();

    searchCity(cityNameInput);
    getRestaurantsAround(cityNameInput);
    console.log(cityNameInput)
})