var cuisineName;
var cuisineId;
var establishmentId;
var establishmentName;
var apiKey = "062f1094719e081c0ffc6ab1f3e61902";
var requestCitiesUrl = "https://developers.zomato.com/api/v2.1/cities?q=";

var requestHeader = new Headers({
    'user-key': apiKey
});

function displayRestaurants(restaurantsList) {
    console.log(restaurantsList);
    var data = restaurantsList;
    $("#restaurants-found").empty();

    for (var i = 0; i < data.length; i++) {
        var restaurantField = $("<div>").addClass("card restaurant-field has-background-light");
        var restaurantMainSection = $("<section>").addClass("columns card-content");
        var figureBox = $("<figure>").addClass("column");
        if (data[i].restaurant.featured_image === "") {
            var imgRestaurant = $("<img>").attr({ src: "assets/images/cat-placeholder.png" });
        } else {
            var imgRestaurant = $("<img>").attr({ src: data[i].restaurant.featured_image, alt: data[i].restaurant.name });
        }
        var locality = $("<figcaption>").text(data[i].restaurant.location.locality);
        var restaurantNameSection = $("<div>").addClass("column media-content");
        var restaurantName = $("<p>").addClass("title is-3").text(data[i].restaurant.name);
        var userRating = $("<p>").addClass("subtitle is-7").text(data[i].restaurant.user_rating.rating_text + " reviews - " + data[i].restaurant.user_rating.aggregate_rating);
        var userRatingSpan = $("<span>").addClass("icon is-small");
        var userRatingIcon = $("<i>").attr({ class: "fas fa-star", "aria-hidden": "true" });
        var reviewsAmount = $("<span>").text(" (" + data[i].restaurant.user_rating.votes + " Reviews" + ")");
        var restaurantLocation = $("<p>").addClass("subtitle is-6").text("Address: " + data[i].restaurant.location.address);
        var hoursOfOperation = $("<p>").addClass("subtitle is-7").text("Hours: " + data[i].restaurant.timings);

        var restaurantDetailsSection = $("<section>").addClass("card-content columns");
        var optionsColumn = $("<div>").addClass("column");
        var cuisineData = $("<p>").text("Cuisines: " + data[i].restaurant.cuisines)

        var costForTwo = $("<p>").text("Cost for two: " + data[i].restaurant.average_cost_for_two);

        var priceRange = $("<p>").text("Price Avg: " + (" "));
        var priceRangeSpan = $("<span>").addClass("ml-5 icon is-small");
        var priceRangeIcon = $("<i>").attr({ class: "fas fa-hand-holding-usd", "aria-hidden": "true" });

        var servesAlcohol = $("<p>").text("Serves Alcohol: ");
        var alcoholAllowedSpan = $("<span>").addClass("icon is-small");
        var alcoholAllowedIcon = $("<i>").attr({ class: "fas fa-thumbs-up", "aria-hidden": "true" });
        var alcoholNotAllowedIcon = $("<i>").attr({ class: "far fa-thumbs-down", "aria-hidden": "true" });



        var highlightsColumn = $("<div>").addClass("column");
        var highlightsOfItems = $("<p>").addClass("has-text-centered").text("Highlights");



        var highlightsData = $("<p>").text(data[i].restaurant.highlights[i]);

        var phoneNumber = $("<p>").text("Phone Number: " + data[i].restaurant.phone_numbers);


        $("#restaurants-found").append(restaurantField);
        restaurantField.append(restaurantMainSection);
        restaurantMainSection.append(figureBox);
        figureBox.append(imgRestaurant, locality);
        restaurantMainSection.append(restaurantNameSection);
        restaurantNameSection.append(restaurantName, userRating.append(userRatingSpan.append(userRatingIcon), reviewsAmount), restaurantLocation, hoursOfOperation);

        restaurantField.append(restaurantDetailsSection);
        restaurantDetailsSection.append(optionsColumn);
        optionsColumn.append(cuisineData, costForTwo, priceRange);
        priceRange.append(priceRangeSpan);

        if (data[i].restaurant.price_range === 1) {
            priceRangeSpan.append(priceRangeIcon);
        } else if (data[i].restaurant.price_range === 2) {
            priceRangeSpan.append(priceRangeIcon);
            priceRangeSpan.append(priceRangeIcon.clone());
        } else if (data[i].restaurant.price_range === 3) {
            priceRangeSpan.append(priceRangeIcon);
            priceRangeSpan.append(priceRangeIcon.clone());
            priceRangeSpan.append(priceRangeIcon.clone());
        } else if (data[i].restaurant.price_range === 4) {
            priceRangeSpan.append(priceRangeIcon);
            priceRangeSpan.append(priceRangeIcon.clone());
            priceRangeSpan.append(priceRangeIcon.clone());
            priceRangeSpan.append(priceRangeIcon.clone());
        }

        optionsColumn.append(servesAlcohol.append(alcoholAllowedSpan));
        for (var x = 0; x < data[i].restaurant.highlights.length; x++) {
            if (data[i].restaurant.highlights[x] === "Serves Alcohol") {
                alcoholAllowedSpan.append(alcoholAllowedIcon);
            }
            // else if (data[i].restaurant.highlights[x] !== "Serves Alcohol") {
            //     alcoholAllowedSpan.append(alcoholNotAllowedIcon);
            // }
        }



        restaurantDetailsSection.append(highlightsColumn);
        highlightsColumn.append(highlightsOfItems);

        for (var j = 0; j < 5; j++) {
            highlightsData = $("<p>").text(data[i].restaurant.highlights[j])
            highlightsColumn.append(highlightsData);

        }


    }
}

function searchRestaurantsByCity(cityId, cuisineId, establishmentId) {
    console.log(establishmentId);
    var requestRestaurantsUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}&establishment_type=${establishmentId}`;
    console.log(requestRestaurantsUrl);

    fetch(requestRestaurantsUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {

        console.log(data);
        var restaurantsList = data.restaurants;
        displayRestaurants(restaurantsList);
    });
}

function searchEstablishmentId(cityId) {
    var requestEstablishmentUrl = `https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`;

    fetch(requestEstablishmentUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        for (var i = 0; i < data.establishments.length; i++) {
            if (data.establishments[i].establishment.name == establishmentName) {
                console.log(data.establishments[i].establishment.name);

                establishmentId = data.establishments[i].establishment.id;
                console.log(establishmentId);
            }
        }
        console.log(establishmentId);
        searchRestaurantsByCity(cityId, cuisineId, establishmentId);
    });


}

function searchCuisinesId(cityId) {
    var requestCuisineUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`;

    fetch(requestCuisineUrl, {
        headers: requestHeader
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        for (var i = 0; i < data.cuisines.length; i++) {
            if (data.cuisines[i].cuisine.cuisine_name == cuisineName) {
                cuisineId = data.cuisines[i].cuisine.cuisine_id;
                console.log(cuisineId);
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
        console.log(cityId);
        searchCuisinesId(cityId);
        searchEstablishmentId(cityId);
    });
}

$("#search-button-rest").on("click", function (event) {
    event.preventDefault();
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
});
