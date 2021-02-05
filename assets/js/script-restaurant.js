var restaurantFieldEl = document.querySelector("#restaurant-field");
var cuisineName;
var cuisineId;
var establishmentId;

restaurantFieldEl.style.display = "none";

var apiKey = "062f1094719e081c0ffc6ab1f3e61902";
var requestCitiesUrl = "https://developers.zomato.com/api/v2.1/cities?q=";

var requestHeader = new Headers({
    'user-key': apiKey
});

$("#restaurant-field")
function searchRestaurantsByCity(cityId, cuisineId, establishmentId) {
    console.log(establishmentId)
    var requestRestaurantsUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}&establishment_type=${establishmentId}`;
    console.log(requestRestaurantsUrl);

    fetch(requestRestaurantsUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {

        console.log(data);
        $("#restaurant-field").append()

    });
}

function searchEstablishmentId(cityId) {
    var requestEstablishmentUrl = `https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`

    fetch(requestEstablishmentUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        for (var i = 0; i < data.establishments.length; i++) {
            if (data.establishments[i].establishment.name == establishmentName) {
                console.log(data.establishments[i].establishment.name)

                establishmentId = data.establishments[i].establishment.id
                console.log(establishmentId)

            }
        }
    });
}

function searchCuisinesId(cityId) {
    var requestCuisineUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`

    fetch(requestCuisineUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        for (var i = 0; i < data.cuisines.length; i++) {
            if (data.cuisines[i].cuisine.cuisine_name == cuisineName) {
                cuisineId = data.cuisines[i].cuisine.cuisine_id
                console.log(cuisineId)

                searchRestaurantsByCity(cityId, cuisineId);
            }

        }
    });
}

function searchCityId(cityName) {

    // building the complete api call url by adding the cityName parameter to the base url
    // note the second parameter to the fetch() call, which is an object with a "headers"
    // property, which I set equal to our requestHeader object from earlier
    fetch(requestCitiesUrl + cityName, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        // log the returned data.
        // (Look at the "location_suggestions" property of the returned object)
        console.log(data);

        var cityId = data.location_suggestions[0].id;
        searchCuisinesId(cityId);

        searchEstablishmentId(cityId);


    });
}




$("#search-button-rest").on("click", function (event) {
    event.preventDefault();
    restaurantFieldEl.style.display = "block";

    var cityNameInput = $("#search-input-city").val();
    var restaurantNameSelect = $("#search-input-rest").val();

    var cuisineOptionEl = document.querySelector("#cuisine-option");
    cuisineName = cuisineOptionEl.value;

    var establishmentEl = document.querySelector("#establishment-option");
    establishmentName = establishmentEl.value;

    console.log(cityNameInput);
    console.log(cuisineName);
    console.log(establishmentName);

    searchCityId(cityNameInput);
    // getRestaurantsAround(cityNameInput);


    // https://javascript.info/var - Example
});